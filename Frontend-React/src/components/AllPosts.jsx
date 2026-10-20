import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  getStoredJobs,
  saveStoredJobs,
  getStoredPipeline,
  saveStoredPipeline,
  INITIAL_JOBS
} from '../utils/jobData';

import Hero from './Hero';
import StatsStrip from './StatsStrip';
import FeaturedJobs from './FeaturedJobs';
import BrowseCategories from './BrowseCategories';
import PipelineKanban from './PipelineKanban';
import HowItWorks from './HowItWorks';
import CtaSection from './CtaSection';
import CompaniesView from './CompaniesView';
import CareerResourcesView from './CareerResourcesView';
import JobModal from './JobModal';
import AuthModal from './AuthModal';
import SavedJobsModal from './SavedJobsModal';

const AllPosts = ({
  activeTab = 'home',
  setActiveTab = () => {},
  savedModalOpen = false,
  setSavedModalOpen = () => {},
  authModalConfig = { open: false, mode: 'login' },
  setAuthModalConfig = () => {}
}) => {
  const navigate = useNavigate();

  // Core Data States
  const [jobs, setJobs] = useState(() => getStoredJobs());
  const [pipeline, setPipeline] = useState(() => getStoredPipeline());
  const [savedJobIds, setSavedJobIds] = useState(() => {
    try {
      const saved = localStorage.getItem('jobify_saved');
      return saved ? JSON.parse(saved) : [101, 103];
    } catch {
      return [101, 103];
    }
  });

  // Filter & Search States
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  // Active Modals
  const [selectedJobModal, setSelectedJobModal] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Show temporary toast message helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  // Fetch initial posts from Spring Boot Backend if available
  useEffect(() => {
    const fetchApiJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/jobPosts', { timeout: 2500 });
        if (Array.isArray(response.data) && response.data.length > 0) {
          // Normalize backend structure to match frontend rich schema
          const normalizedApiJobs = response.data.map((apiJob) => {
            let parsedDesc = {};
            try {
              if (apiJob.postDesc && apiJob.postDesc.startsWith('{')) {
                parsedDesc = JSON.parse(apiJob.postDesc);
              }
            } catch (e) {
              // Not JSON
            }

            return {
              postId: apiJob.postId,
              postProfile: apiJob.postProfile || 'Software Engineer',
              companyName: apiJob.companyName || parsedDesc.companyName || 'Tech Partner',
              companyShort: (apiJob.companyName || 'TP').slice(0, 2).toUpperCase(),
              companyAvatarBg: 'bg-primary text-on-primary',
              jobLocation: apiJob.jobLocation || parsedDesc.jobLocation || 'Bengaluru (Hybrid)',
              workplaceType: (apiJob.jobLocation || '').toLowerCase().includes('remote') ? 'Remote' : 'Hybrid',
              employmentType: 'Full-time',
              experienceReq: apiJob.reqExperience ? `${apiJob.reqExperience}+ Years` : '1-3 Years',
              salary: parsedDesc.salaryDetails ? parsedDesc.salaryDetails.split('\n')[0] : `₹${(apiJob.reqExperience || 2) * 3}–${(apiJob.reqExperience || 2) * 5} LPA`,
              postTechStack: Array.isArray(apiJob.postTechStack) ? apiJob.postTechStack : ['Java', 'Spring Boot'],
              postDesc: typeof apiJob.postDesc === 'string' && !apiJob.postDesc.startsWith('{') ? apiJob.postDesc : (parsedDesc.description || 'Enterprise engineering opportunity.'),
              category: 'Software Development',
              isFeatured: true
            };
          });

          // Combine with seed jobs avoiding duplicate IDs
          const combined = [...normalizedApiJobs, ...INITIAL_JOBS.filter(j => !normalizedApiJobs.some(aj => aj.postId === j.postId))];
          setJobs(combined);
          saveStoredJobs(combined);
        }
      } catch (err) {
        // Backend offline or unreachable, keep using stored jobs
        console.log('Backend not available, using offline demo jobs repository.');
      }
    };

    fetchApiJobs();
  }, []);

  // Update pipeline persistence
  const handleUpdatePipelineStatus = (itemId, newStatus) => {
    setPipeline((prev) => {
      const next = prev.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            status: newStatus,
            stageLabel: newStatus === 'applied' ? 'Application Received' : newStatus === 'interviewing' ? 'Interview Scheduled' : 'Offer Extended',
            badgeColor: newStatus === 'applied' ? 'bg-surface-container text-on-surface-variant' : newStatus === 'interviewing' ? 'bg-primary text-on-primary' : 'bg-secondary text-on-secondary'
          };
        }
        return item;
      });
      saveStoredPipeline(next);
      return next;
    });
    showToast('Application status updated in pipeline!');
  };

  const handleAddApplication = (newApp) => {
    setPipeline((prev) => {
      const next = [newApp, ...prev];
      saveStoredPipeline(next);
      return next;
    });
    showToast(`Added ${newApp.role} at ${newApp.company} to your Pipeline!`);
  };

  const handleDeleteApplication = (itemId) => {
    setPipeline((prev) => {
      const next = prev.filter((item) => item.id !== itemId);
      saveStoredPipeline(next);
      return next;
    });
    showToast('Application removed from tracker.');
  };

  // Toggle Save / Bookmark
  const handleToggleSave = (jobId) => {
    setSavedJobIds((prev) => {
      let next;
      if (prev.includes(jobId)) {
        next = prev.filter((id) => id !== jobId);
        showToast('Removed from saved jobs.');
      } else {
        next = [...prev, jobId];
        showToast('Job saved to your bookmarks!');
      }
      try {
        localStorage.setItem('jobify_saved', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // Delete Job (Admin action)
  const handleDeleteJob = async (jobId) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      try {
        await axios.delete(`http://localhost:8080/jobPost/${jobId}`, { timeout: 2000 });
      } catch (e) {
        // Continue with local deletion
      }
      const updated = jobs.filter((j) => j.postId !== jobId);
      setJobs(updated);
      saveStoredJobs(updated);
      showToast('Job posting deleted.');
    }
  };

  // Edit Job (Admin action)
  const handleEditJob = (jobId) => {
    navigate('/edit', { state: { id: jobId } });
  };

  // Saved Jobs objects
  const savedJobsList = useMemo(() => {
    return jobs.filter((job) => savedJobIds.includes(job.postId));
  }, [jobs, savedJobIds]);

  // Filtered jobs according to search and location
  const filteredJobs = useMemo(() => {
    const kw = searchKeyword.toLowerCase().trim();
    const loc = searchLocation.toLowerCase().trim();

    return jobs.filter((job) => {
      const profile = String(job.postProfile || '').toLowerCase();
      const company = String(job.companyName || '').toLowerCase();
      const jobLoc = String(job.jobLocation || '').toLowerCase();
      const desc = String(job.postDesc || '').toLowerCase();
      const skills = Array.isArray(job.postTechStack) ? job.postTechStack.join(' ').toLowerCase() : '';

      const matchKw =
        !kw ||
        profile.includes(kw) ||
        company.includes(kw) ||
        skills.includes(kw) ||
        desc.includes(kw);

      const matchLoc = !loc || jobLoc.includes(loc);

      return matchKw && matchLoc;
    });
  }, [jobs, searchKeyword, searchLocation]);

  // Handle direct search submission
  const handleSearch = (kw, loc) => {
    setSearchKeyword(kw);
    setSearchLocation(loc);
    const element = document.getElementById('featured-jobs-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle application submission inside modal
  const handleApplySuccess = (newApplication) => {
    handleAddApplication(newApplication);
  };

  const heroJob = jobs.find((j) => j.isHero) || jobs[0];

  return (
    <div className="w-full flex flex-col min-h-screen bg-surface">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-on-surface text-surface px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-outline-variant/40 animate-fadeIn">
          <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* VIEW CONDITIONAL RENDERING BASED ON ACTIVE TAB */}
      {activeTab === 'home' && (
        <>
          {/* HERO SECTION */}
          <Hero
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            searchLocation={searchLocation}
            setSearchLocation={setSearchLocation}
            onSearch={handleSearch}
            onQuickApplyHero={(job) => setSelectedJobModal(job)}
            heroJob={heroJob}
          />

          {/* TRUST & STATS STRIP */}
          <StatsStrip totalJobs={jobs.length} />

          {/* FEATURED JOB OPPORTUNITIES */}
          <FeaturedJobs
            jobs={filteredJobs}
            savedJobIds={savedJobIds}
            onToggleSave={handleToggleSave}
            onViewJob={(job) => setSelectedJobModal(job)}
            onEditJob={handleEditJob}
            onDeleteJob={handleDeleteJob}
            activeCategoryFilter={activeCategory}
            setActiveCategoryFilter={setActiveCategory}
            onViewAllJobs={() => {
              setActiveTab('jobs');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* BROWSE JOBS BY CATEGORY */}
          <BrowseCategories
            onSelectCategory={(cat) => {
              setActiveCategory(cat);
              setSearchKeyword('');
            }}
            activeCategory={activeCategory}
          />

          {/* WHY JOBIFY? VALUE PILLARS & INTERACTIVE PIPELINE KANBAN */}
          <PipelineKanban
            pipeline={pipeline}
            onUpdateStatus={handleUpdatePipelineStatus}
            onAddApplication={handleAddApplication}
            onDeleteApplication={handleDeleteApplication}
            isFullPage={false}
          />

          {/* STREAMLINED PROCESS / THREE STEPS */}
          <HowItWorks
            onGetStarted={() => setAuthModalConfig({ open: true, mode: 'signup' })}
          />

          {/* FINAL CALL TO ACTION */}
          <CtaSection
            onExploreJobs={() => {
              setActiveTab('jobs');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGetStarted={() => setAuthModalConfig({ open: true, mode: 'signup' })}
          />
        </>
      )}

      {/* FIND JOBS TAB VIEW */}
      {activeTab === 'jobs' && (
        <div className="pt-space-md pb-space-xl">
          <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin mb-space-md">
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 shadow-xs mb-space-md">
              <h2 className="font-headline-lg font-bold text-on-surface mb-2">Explore All Tech Openings</h2>
              <p className="text-sm text-on-surface-variant mb-4">
                Browse verified engineering, product, and data opportunities with transparent compensation.
              </p>

              {/* Search inputs */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-6 relative flex items-center bg-surface-container-low rounded-lg px-3 h-11 border border-outline-variant/40">
                  <span className="material-symbols-outlined text-outline text-[20px] mr-2">work_outline</span>
                  <input
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="Search by role, skill, or company (e.g. Java, React, SQL)"
                    className="w-full bg-transparent border-0 text-sm text-on-surface focus:outline-none"
                  />
                  {searchKeyword && (
                    <button onClick={() => setSearchKeyword('')} className="text-outline hover:text-on-surface">
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  )}
                </div>

                <div className="md:col-span-4 relative flex items-center bg-surface-container-low rounded-lg px-3 h-11 border border-outline-variant/40">
                  <span className="material-symbols-outlined text-outline text-[20px] mr-2">location_on</span>
                  <input
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    placeholder="Location (e.g. Bengaluru, Remote)"
                    className="w-full bg-transparent border-0 text-sm text-on-surface focus:outline-none"
                  />
                  {searchLocation && (
                    <button onClick={() => setSearchLocation('')} className="text-outline hover:text-on-surface">
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  )}
                </div>

                <div className="md:col-span-2">
                  <button
                    onClick={() => {
                      setSearchKeyword('');
                      setSearchLocation('');
                      setActiveCategory('');
                    }}
                    className="w-full h-11 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-xs"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          </div>

          <FeaturedJobs
            jobs={filteredJobs}
            savedJobIds={savedJobIds}
            onToggleSave={handleToggleSave}
            onViewJob={(job) => setSelectedJobModal(job)}
            onEditJob={handleEditJob}
            onDeleteJob={handleDeleteJob}
            activeCategoryFilter={activeCategory}
            setActiveCategoryFilter={setActiveCategory}
            onViewAllJobs={() => {}}
          />
        </div>
      )}

      {/* COMPANIES TAB VIEW */}
      {activeTab === 'companies' && (
        <CompaniesView
          onSelectCompany={(companyName) => {
            setSearchKeyword(companyName);
            setActiveTab('jobs');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* INTERNSHIPS TAB VIEW */}
      {activeTab === 'internships' && (
        <div className="pt-space-md pb-space-xl">
          <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin mb-space-md">
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 shadow-xs">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                Early Career Opportunities
              </span>
              <h2 className="font-headline-lg font-bold text-on-surface mb-2">Student & Graduate Internships</h2>
              <p className="text-sm text-on-surface-variant">
                Paid software engineering, data analytics, and design internships offering 1:1 mentorship and full-time conversion tracks.
              </p>
            </div>
          </div>

          <FeaturedJobs
            jobs={jobs.filter(
              (j) =>
                j.employmentType === 'Internship' ||
                j.category === 'Internships & Entry' ||
                j.experienceReq?.toLowerCase().includes('fresher')
            )}
            savedJobIds={savedJobIds}
            onToggleSave={handleToggleSave}
            onViewJob={(job) => setSelectedJobModal(job)}
            onEditJob={handleEditJob}
            onDeleteJob={handleDeleteJob}
            activeCategoryFilter=""
            setActiveCategoryFilter={() => {}}
            onViewAllJobs={() => {}}
          />
        </div>
      )}

      {/* PIPELINE KANBAN FULL VIEW */}
      {activeTab === 'pipeline' && (
        <div className="py-space-md">
          <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin mb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 shadow-xs">
              <div>
                <h2 className="font-headline-lg font-bold text-on-surface">Your Applications Pipeline</h2>
                <p className="text-sm text-on-surface-variant">
                  Track your job applications, schedule interview rounds, and manage job offers in one unified Kanban tracker.
                </p>
              </div>
              <button
                onClick={() => setActiveTab('jobs')}
                className="px-4 py-2 rounded-lg bg-primary text-white font-semibold text-xs shadow-xs hover:bg-primary-container"
              >
                + Apply to More Jobs
              </button>
            </div>
          </div>

          <PipelineKanban
            pipeline={pipeline}
            onUpdateStatus={handleUpdatePipelineStatus}
            onAddApplication={handleAddApplication}
            onDeleteApplication={handleDeleteApplication}
            isFullPage={true}
          />
        </div>
      )}

      {/* CAREER RESOURCES TAB VIEW */}
      {activeTab === 'resources' && <CareerResourcesView />}

      {/* MODALS */}
      {selectedJobModal && (
        <JobModal
          job={selectedJobModal}
          onClose={() => setSelectedJobModal(null)}
          isSaved={savedJobIds.includes(selectedJobModal.postId)}
          onToggleSave={handleToggleSave}
          onApplySuccess={handleApplySuccess}
        />
      )}

      {savedModalOpen && (
        <SavedJobsModal
          savedJobs={savedJobsList}
          onClose={() => setSavedModalOpen(false)}
          onToggleSave={handleToggleSave}
          onViewJob={(job) => setSelectedJobModal(job)}
        />
      )}

      {authModalConfig.open && (
        <AuthModal
          mode={authModalConfig.mode}
          onClose={() => setAuthModalConfig({ open: false, mode: 'login' })}
        />
      )}
    </div>
  );
};

export default AllPosts;