import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const JobModal = ({
  job,
  onClose,
  isSaved,
  onToggleSave,
  onApplySuccess
}) => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'apply'
  const [applicantName, setApplicantName] = useState(user?.name || '');
  const [applicantEmail, setApplicantEmail] = useState(user?.email || '');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantExperience, setApplicantExperience] = useState('2');
  const [applicantNote, setApplicantNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Create new Kanban application entry
      const newApplication = {
        id: `app-${Date.now()}`,
        company: job.companyName || 'Tech Partner',
        role: job.postProfile || 'Software Engineer',
        salary: job.salary || 'Competitive',
        status: 'applied',
        appliedDate: 'Just now',
        stageLabel: 'Application Received',
        badgeColor: 'bg-surface-container text-on-surface-variant',
        notes: `Applied with note: ${applicantNote || 'Standard profile submitted.'}`
      };

      if (onApplySuccess) {
        onApplySuccess(newApplication);
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-surface-container-lowest rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-outline-variant/60 relative my-8 max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-start justify-between pb-4 border-b border-outline-variant/30 shrink-0">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-headline-sm shadow-xs ${
                job.companyAvatarBg || 'bg-surface-container-high text-primary'
              }`}
            >
              {job.companyShort || (job.companyName ? job.companyName.slice(0, 2).toUpperCase() : 'JB')}
            </div>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">
                {job.postProfile || 'Software Engineer'}
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5 mt-0.5">
                <span className="font-medium text-on-surface">{job.companyName || 'Verified Partner'}</span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-secondary font-medium flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  Verified Direct Employer
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(job.postId)}
              className={`p-2 rounded-lg hover:bg-surface-container-low transition-colors ${
                isSaved ? 'text-primary fill-1' : 'text-outline hover:text-primary'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save job'}
            >
              <span className={`material-symbols-outlined text-[22px] ${isSaved ? 'fill-1' : ''}`}>
                {isSaved ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-low transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 pt-3 pb-2 border-b border-outline-variant/20 shrink-0">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'details'
                ? 'bg-primary-container text-white shadow-xs'
                : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant'
            }`}
          >
            Job Overview & Specs
          </button>
          <button
            onClick={() => setActiveTab('apply')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
              activeTab === 'apply'
                ? 'bg-secondary text-white shadow-xs'
                : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant'
            }`}
          >
            <span className="material-symbols-outlined text-[14px]">send</span>
            Quick 1-Click Apply
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto py-4 flex-1 pr-1">
          {activeTab === 'details' ? (
            <div className="space-y-5">
              {/* Highlights Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-surface-container-low p-3.5 rounded-xl border border-outline-variant/30 text-center">
                <div>
                  <span className="text-[11px] text-on-surface-variant block font-medium">Compensation</span>
                  <span className="text-sm font-bold text-on-surface">{job.salary || 'Competitive'}</span>
                </div>
                <div>
                  <span className="text-[11px] text-on-surface-variant block font-medium">Job Type</span>
                  <span className="text-sm font-bold text-on-surface">{job.employmentType || 'Full-time'}</span>
                </div>
                <div>
                  <span className="text-[11px] text-on-surface-variant block font-medium">Location</span>
                  <span className="text-sm font-bold text-on-surface truncate block">{job.jobLocation || 'Remote'}</span>
                </div>
                <div>
                  <span className="text-[11px] text-on-surface-variant block font-medium">Experience</span>
                  <span className="text-sm font-bold text-on-surface">{job.experienceReq || '1-3 Years'}</span>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Required Skills & Tech</h4>
                <div className="flex flex-wrap gap-1.5">
                  {(job.postTechStack || []).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-semibold text-xs border border-outline-variant/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">About The Role</h4>
                <p className="text-sm text-on-surface leading-relaxed whitespace-pre-line">
                  {job.postDesc || 'Join a high-impact engineering team to build scalable systems with modern technologies.'}
                </p>
              </div>

              {/* Requirements list */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">What We Look For</h4>
                <ul className="space-y-1.5">
                  {(job.requirements || [
                    "Solid hands-on software design and coding experience",
                    "Strong problem solving and team collaboration skills",
                    "Familiarity with modern version control and CI/CD tools"
                  ]).map((req, i) => (
                    <li key={i} className="text-xs sm:text-sm text-on-surface flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0">check_circle</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">Perks & Benefits</h4>
                <ul className="space-y-1.5">
                  {(job.benefits || [
                    "Comprehensive medical, dental, and vision insurance",
                    "Flexible hybrid or remote schedule",
                    "Annual education & certification stipend"
                  ]).map((ben, i) => (
                    <li key={i} className="text-xs sm:text-sm text-on-surface flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0">star</span>
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            /* Quick Apply Form */
            <div>
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center mx-auto text-3xl shadow-sm">
                    ✓
                  </div>
                  <h3 className="font-headline-md font-bold text-on-surface">Application Submitted!</h3>
                  <p className="text-sm text-on-surface-variant max-w-sm mx-auto">
                    Your profile and application for <span className="font-semibold text-on-surface">{job.postProfile}</span> have been delivered directly to the {job.companyName} recruiting team.
                  </p>
                  <div className="p-3 bg-surface-container-low rounded-xl max-w-md mx-auto text-xs text-secondary font-medium">
                    ⚡ Auto-added to your <strong>Applications Pipeline Kanban</strong> tracker.
                  </div>
                  <button
                    onClick={onClose}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-primary text-white font-semibold text-xs shadow-xs"
                  >
                    Back to Jobs
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-3.5">
                  <div className="bg-primary/5 p-3 rounded-xl border border-primary/20 text-xs text-primary font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">bolt</span>
                    <span>1-Click Fast Apply: Recruiter receives notification immediately.</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-on-surface block mb-1">Full Name</label>
                      <input
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Alex Johnson"
                        className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/60 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-on-surface block mb-1">Email Address</label>
                      <input
                        required
                        type="email"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="alex@example.com"
                        className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/60 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-on-surface block mb-1">Phone Number</label>
                      <input
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/60 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-on-surface block mb-1">Total Experience (Years)</label>
                      <select
                        value={applicantExperience}
                        onChange={(e) => setApplicantExperience(e.target.value)}
                        className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/60 focus:outline-none focus:border-primary"
                      >
                        <option value="0">Fresher / 0-1 Years</option>
                        <option value="2">1-3 Years</option>
                        <option value="4">3-5 Years</option>
                        <option value="6">5+ Years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-on-surface block mb-1">
                      Cover Note or Portfolio Link
                    </label>
                    <textarea
                      rows={3}
                      value={applicantNote}
                      onChange={(e) => setApplicantNote(e.target.value)}
                      placeholder="Share a brief intro, GitHub, or LinkedIn profile..."
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/60 focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-outline flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">lock</span>
                      Your information is protected
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-10 px-6 rounded-lg bg-secondary text-white font-label-md text-xs font-bold shadow-sm hover:opacity-95 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer CTA in Details view */}
        {activeTab === 'details' && (
          <div className="flex items-center justify-between pt-3 border-t border-outline-variant/30 shrink-0">
            <div>
              <span className="text-[11px] text-on-surface-variant block">Offered Compensation</span>
              <span className="text-base font-bold text-on-surface">{job.salary || 'Competitive'}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-outline-variant text-xs font-semibold hover:bg-surface-container-low transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => setActiveTab('apply')}
                className="px-5 py-2 rounded-lg bg-secondary text-white text-xs font-bold hover:opacity-95 shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
              >
                <span>Apply Now</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobModal;
