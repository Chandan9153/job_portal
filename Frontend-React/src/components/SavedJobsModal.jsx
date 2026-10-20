import React from 'react';

const SavedJobsModal = ({ savedJobs = [], onClose, onToggleSave, onViewJob }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-outline-variant/60 relative max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30 shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">bookmark</span>
            <h3 className="font-headline-sm font-bold text-on-surface">
              Saved Jobs ({savedJobs.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-outline hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content list */}
        <div className="overflow-y-auto py-3 space-y-3 flex-1 pr-1">
          {savedJobs.length > 0 ? (
            savedJobs.map((job) => (
              <div
                key={job.postId}
                className="p-3.5 bg-surface-container-low rounded-xl border border-outline-variant/40 flex items-center justify-between gap-3 hover:border-primary-container transition-all"
              >
                <div className="min-w-0">
                  <h4
                    onClick={() => {
                      onViewJob(job);
                      onClose();
                    }}
                    className="font-semibold text-sm text-on-surface truncate cursor-pointer hover:text-primary transition-colors"
                  >
                    {job.postProfile}
                  </h4>
                  <p className="text-xs text-on-surface-variant flex items-center gap-1">
                    <span>{job.companyName}</span>
                    <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                    <span>{job.jobLocation || 'Remote'}</span>
                  </p>
                  <span className="text-xs font-bold text-primary block mt-1">
                    {job.salary || 'Competitive'}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      onViewJob(job);
                      onClose();
                    }}
                    className="px-3 py-1.5 rounded-lg bg-primary-container text-white text-xs font-semibold hover:bg-primary transition-colors"
                  >
                    View
                  </button>
                  <button
                    onClick={() => onToggleSave(job.postId)}
                    className="p-1.5 text-outline hover:text-error hover:bg-surface-container rounded-lg transition-colors"
                    title="Remove from saved"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-on-surface-variant space-y-2">
              <span className="material-symbols-outlined text-4xl text-outline">bookmark_border</span>
              <p className="text-sm font-medium">No saved jobs yet</p>
              <p className="text-xs text-outline">
                Click the bookmark icon on any job card to save it for quick review.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-outline-variant/30 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-surface-container text-on-surface"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedJobsModal;
