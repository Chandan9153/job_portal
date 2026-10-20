import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const FeaturedJobs = ({
  jobs = [],
  savedJobIds = [],
  onToggleSave,
  onViewJob,
  onEditJob,
  onDeleteJob,
  activeCategoryFilter,
  setActiveCategoryFilter,
  onViewAllJobs
}) => {
  const { isAdmin } = useAuth();
  const [selectedWorkplace, setSelectedWorkplace] = useState('all');

  const filterChips = [
    { id: 'all', label: 'All Openings' },
    { id: 'Software Development', label: 'Software' },
    { id: 'Frontend Engineering', label: 'Frontend' },
    { id: 'Backend Engineering', label: 'Backend' },
    { id: 'Data Science & AI', label: 'Data & AI' },
    { id: 'Internships & Entry', label: 'Internships' },
  ];

  // Filter jobs by category and workplace
  const displayedJobs = jobs.filter((job) => {
    const matchesCategory =
      !activeCategoryFilter ||
      activeCategoryFilter === 'all' ||
      job.category === activeCategoryFilter ||
      (Array.isArray(job.postTechStack) &&
        job.postTechStack.some((t) => t.toLowerCase().includes(activeCategoryFilter.toLowerCase())));

    const matchesWorkplace =
      selectedWorkplace === 'all' ||
      (selectedWorkplace === 'remote' && (job.jobLocation?.toLowerCase().includes('remote') || job.workplaceType === 'Remote')) ||
      (selectedWorkplace === 'hybrid' && (job.jobLocation?.toLowerCase().includes('hybrid') || job.workplaceType === 'Hybrid'));

    return matchesCategory && matchesWorkplace;
  });

  return (
    <section className="w-full bg-surface-container-low py-space-xl" id="featured-jobs-section">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        {/* Section Title & Meta Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Top Openings
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold tracking-tight">
              Explore Featured Opportunities
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Find roles curated for high engineering rigor, transparent pay scales, and exceptional culture.
            </p>
          </div>

          <div className="flex items-center gap-space-sm shrink-0">
            <button
              onClick={onViewAllJobs}
              className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:text-primary-container transition-colors bg-transparent border-0 cursor-pointer p-0"
            >
              <span>View all {jobs.length} jobs</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Quick Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-lg bg-surface-container-lowest p-2 rounded-xl border border-outline-variant/40 shadow-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            {filterChips.map((chip) => {
              const isActive = (activeCategoryFilter || 'all') === chip.id;
              return (
                <button
                  key={chip.id}
                  onClick={() => setActiveCategoryFilter(chip.id === 'all' ? '' : chip.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary-container text-white shadow-xs'
                      : 'bg-surface-container-low hover:bg-surface-container text-on-surface'
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-xs text-on-surface-variant font-medium hidden sm:inline">Location:</span>
            <select
              value={selectedWorkplace}
              onChange={(e) => setSelectedWorkplace(e.target.value)}
              className="text-xs bg-surface-container-low border border-outline-variant/40 rounded-lg px-2.5 py-1.5 text-on-surface font-medium focus:outline-none focus:border-primary-container"
            >
              <option value="all">All Locations</option>
              <option value="remote">Remote Only</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        {/* 3-Column Job Card Grid */}
        {displayedJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {displayedJobs.map((job) => {
              const isSaved = savedJobIds.includes(job.postId);
              return (
                <div
                  key={job.postId}
                  className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-outline-variant/60 hover:border-primary-container hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Header: Avatar, Info, Bookmark */}
                    <div className="flex items-start justify-between gap-space-xs mb-space-sm">
                      <div className="flex items-center gap-space-sm">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-headline-sm shadow-xs ${
                            job.companyAvatarBg || 'bg-surface-container-high text-primary'
                          }`}
                        >
                          {job.companyShort || (job.companyName ? job.companyName.slice(0, 2).toUpperCase() : 'JB')}
                        </div>
                        <div>
                          <h3
                            onClick={() => onViewJob(job)}
                            className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors cursor-pointer"
                          >
                            {job.postProfile || 'Software Engineer'}
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            {job.companyName || 'Verified Partner'}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => onToggleSave(job.postId)}
                        aria-label="Bookmark Job"
                        className={`transition-colors p-1.5 rounded-lg hover:bg-surface-container-low ${
                          isSaved ? 'text-primary fill-1' : 'text-outline hover:text-primary'
                        }`}
                        title={isSaved ? 'Remove from Saved' : 'Save Job'}
                      >
                        <span className={`material-symbols-outlined text-[20px] ${isSaved ? 'fill-1' : ''}`}>
                          {isSaved ? 'bookmark' : 'bookmark_border'}
                        </span>
                      </button>
                    </div>

                    {/* Badges and Location */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-space-md font-body-sm text-body-sm text-on-surface-variant">
                      <span className="inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
                        <span>{job.jobLocation || 'Remote'}</span>
                      </span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                      <span
                        className={
                          job.employmentType === 'Internship'
                            ? 'text-secondary font-medium'
                            : 'text-on-surface-variant'
                        }
                      >
                        {job.employmentType || 'Full-time'}
                      </span>
                      {job.experienceReq && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                          <span className="text-outline text-xs">{job.experienceReq}</span>
                        </>
                      )}
                    </div>

                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-space-md">
                      {(job.postTechStack || []).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-body-sm text-body-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer: Salary and Action Buttons */}
                  <div className="flex items-center justify-between pt-space-sm border-t border-outline-variant/40 mt-space-sm">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">
                        {job.employmentType === 'Internship' ? 'Stipend' : 'Annual CTC'}
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        {job.salary || (job.reqExperience ? `₹${job.reqExperience * 3}-${job.reqExperience * 5} LPA` : 'Competitive')}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isAdmin() && (
                        <>
                          <button
                            onClick={() => onEditJob(job.postId)}
                            className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-lg"
                            title="Edit Job"
                          >
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                          <button
                            onClick={() => onDeleteJob(job.postId)}
                            className="p-1.5 text-outline hover:text-error hover:bg-error-container/30 rounded-lg"
                            title="Delete Job"
                          >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </>
                      )}
                      <button
                        onClick={() => onViewJob(job)}
                        className="h-9 px-space-md rounded-lg bg-surface-container hover:bg-primary-container hover:text-on-primary text-on-surface font-label-md text-label-md transition-all active:scale-95 cursor-pointer shadow-xs"
                        type="button"
                      >
                        View Job
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-surface-container-lowest rounded-xl p-10 text-center border border-outline-variant/40">
            <span className="material-symbols-outlined text-4xl text-outline mb-2">work_off</span>
            <h3 className="font-headline-sm font-semibold text-on-surface mb-1">No matching roles found</h3>
            <p className="font-body-md text-on-surface-variant mb-4">
              Try adjusting your search criteria or resetting applied filters.
            </p>
            <button
              onClick={() => {
                setActiveCategoryFilter('');
                setSelectedWorkplace('all');
              }}
              className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobs;
