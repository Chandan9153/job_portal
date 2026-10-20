import React, { useState } from 'react';

const PipelineKanban = ({
  pipeline = [],
  onUpdateStatus,
  onAddApplication,
  onDeleteApplication,
  isFullPage = false
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(null);
  const [newCompany, setNewCompany] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newSalary, setNewSalary] = useState('');
  const [newStage, setNewStage] = useState('applied');

  const columns = [
    {
      id: 'applied',
      title: 'Applied',
      headerColor: 'text-on-surface-variant',
      badgeColor: 'bg-surface-container text-on-surface-variant',
      accentBorder: 'border-outline-variant/50'
    },
    {
      id: 'interviewing',
      title: 'Interviewing',
      headerColor: 'text-primary',
      badgeColor: 'bg-primary-fixed text-primary',
      accentBorder: 'border-primary-container'
    },
    {
      id: 'offer',
      title: 'Offer Extended',
      headerColor: 'text-secondary',
      badgeColor: 'bg-secondary-fixed text-secondary',
      accentBorder: 'border-secondary'
    }
  ];

  const handleCreateApplication = (e) => {
    e.preventDefault();
    if (!newCompany.trim() || !newRole.trim()) return;

    const newApp = {
      id: `app-${Date.now()}`,
      company: newCompany,
      role: newRole,
      salary: newSalary || 'Competitive',
      status: newStage,
      appliedDate: 'Just now',
      stageLabel: newStage === 'applied' ? 'Application Received' : newStage === 'interviewing' ? 'Interview Scheduled' : 'Offer Extended',
      badgeColor: newStage === 'applied' ? 'bg-surface-container text-on-surface-variant' : newStage === 'interviewing' ? 'bg-primary text-on-primary' : 'bg-secondary text-on-secondary',
      notes: 'Added to your personal tracker.'
    };

    if (onAddApplication) {
      onAddApplication(newApp);
    }

    setNewCompany('');
    setNewRole('');
    setNewSalary('');
    setShowAddModal(false);
  };

  const advanceStatus = (item, nextStatus) => {
    if (onUpdateStatus) {
      onUpdateStatus(item.id, nextStatus);
    }
  };

  return (
    <section className={`w-full ${isFullPage ? 'py-space-md' : 'bg-surface-container-low py-space-xl'}`} id="pipeline-section">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        <div className={`grid grid-cols-1 ${isFullPage ? '' : 'lg:grid-cols-12'} gap-space-xl items-center`}>
          {/* Left Column: Value Pillars (shown if on homepage) */}
          {!isFullPage && (
            <div className="lg:col-span-5 flex flex-col">
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                Built Differently
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold tracking-tight mt-1 mb-space-sm">
                Your Job Search, Made Simpler.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg">
                Spend less time scrolling and formatting resumes, and more time having impactful conversations with teams who value your craft.
              </p>

              <div className="flex flex-col gap-space-md">
                {/* Pillar 1 */}
                <div className="flex gap-space-sm items-start">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest border border-outline-variant/60 flex items-center justify-center text-primary shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[20px]">filter_alt</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Smart Job Discovery
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Algorithmic matching scores based on real tech stacks, workplace preferences, and verified target salaries.
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex gap-space-sm items-start">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest border border-outline-variant/60 flex items-center justify-center text-primary shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[20px]">view_kanban</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Integrated Pipeline Tracker
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Ditch manual spreadsheets. Track statuses from application to final offer letter in an automated Kanban view.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex gap-space-sm items-start">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest border border-outline-variant/60 flex items-center justify-center text-primary shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Verified Direct Employers
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      No phantom listings or aggregator spam. Connect directly with hiring managers and in-house technical recruiters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: Realistic Application Pipeline Kanban Board */}
          <div className={isFullPage ? 'w-full' : 'lg:col-span-7'}>
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-space-md shadow-lg">
              {/* Kanban Header Strip */}
              <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/40 mb-space-md flex-wrap gap-2">
                <div className="flex items-center gap-space-xs">
                  <span className="w-3 h-3 rounded-full bg-error"></span>
                  <span className="w-3 h-3 rounded-full bg-outline"></span>
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold ml-space-xs">
                    My Applications Pipeline
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-surface-container text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-[15px]">add</span>
                    <span>Add Job</span>
                  </button>

                  <span className="font-body-sm text-body-sm text-secondary font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] animate-spin" style={{ animationDuration: '6s' }}>
                      sync
                    </span>
                    Auto-updating
                  </span>
                </div>
              </div>

              {/* Kanban Columns Container */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                {columns.map((col) => {
                  const colItems = pipeline.filter((item) => item.status === col.id);
                  return (
                    <div
                      key={col.id}
                      className="bg-surface-container-low rounded-lg p-space-xs flex flex-col gap-space-xs min-h-[300px]"
                    >
                      <div className="flex items-center justify-between px-space-xs py-1">
                        <span className={`font-label-sm text-label-sm font-bold uppercase ${col.headerColor}`}>
                          {col.title}
                        </span>
                        <span className={`px-1.5 py-0.5 rounded-full font-label-sm text-label-sm ${col.badgeColor}`}>
                          {colItems.length}
                        </span>
                      </div>

                      {/* Cards List in this Column */}
                      <div className="flex flex-col gap-space-xs flex-1">
                        {colItems.map((item) => {
                          const isOffer = col.id === 'offer';
                          const isInterview = col.id === 'interviewing';

                          return (
                            <div
                              key={item.id}
                              className={`bg-surface-container-lowest p-space-sm rounded-lg border shadow-xs transition-all hover:shadow-md relative group ${
                                isOffer
                                  ? 'border-secondary bg-gradient-to-b from-surface-container-lowest to-secondary-container/10'
                                  : isInterview
                                  ? 'border-primary-container'
                                  : 'border-outline-variant/50'
                              }`}
                            >
                              {/* Top row */}
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-label-sm text-label-sm text-on-surface font-semibold flex items-center gap-1">
                                  {item.company}
                                  {isOffer && (
                                    <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
                                  )}
                                </span>

                                {isInterview ? (
                                  <span className="px-1.5 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm">
                                    {item.stageLabel || 'Tech Round'}
                                  </span>
                                ) : (
                                  <span className="text-outline text-body-sm text-xs">
                                    {item.appliedDate || 'Recent'}
                                  </span>
                                )}
                              </div>

                              {/* Role */}
                              <span
                                onClick={() => setSelectedItem(item)}
                                className="font-body-sm text-body-sm text-on-surface font-semibold block cursor-pointer hover:text-primary transition-colors"
                              >
                                {item.role}
                              </span>

                              {/* Extra interview detail */}
                              {isInterview && item.interviewTime && (
                                <div className="mt-2 pt-2 border-t border-outline-variant/30 flex items-center justify-between text-body-sm text-on-surface-variant">
                                  <span className="flex items-center gap-1 text-primary text-xs font-medium">
                                    <span className="material-symbols-outlined text-[14px]">videocam</span>
                                    {item.interviewTime}
                                  </span>
                                  <span className="font-semibold text-on-surface text-xs">{item.salary}</span>
                                </div>
                              )}

                              {/* Offer row */}
                              {isOffer && (
                                <>
                                  <span className="font-headline-sm text-headline-sm text-secondary font-bold block mt-1">
                                    {item.salary}
                                  </span>
                                  <div className="mt-2 text-right">
                                    <button
                                      onClick={() => setShowOfferModal(item)}
                                      className="px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm hover:opacity-90 active:scale-95 transition-all shadow-xs cursor-pointer"
                                    >
                                      Review Offer
                                    </button>
                                  </div>
                                </>
                              )}

                              {/* Normal salary if applied */}
                              {!isInterview && !isOffer && (
                                <span className="font-label-sm text-label-sm text-outline block mt-1">
                                  {item.salary}
                                </span>
                              )}

                              {/* Interactive Kanban Transition Actions (Hover Bar) */}
                              <div className="mt-2 pt-1 border-t border-outline-variant/20 flex items-center justify-between text-[11px] text-on-surface-variant opacity-80 group-hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-1">
                                  {col.id !== 'applied' && (
                                    <button
                                      onClick={() => advanceStatus(item, col.id === 'offer' ? 'interviewing' : 'applied')}
                                      className="hover:text-primary font-bold p-0.5"
                                      title="Move Back"
                                    >
                                      ←
                                    </button>
                                  )}
                                  {col.id !== 'offer' && (
                                    <button
                                      onClick={() => advanceStatus(item, col.id === 'applied' ? 'interviewing' : 'offer')}
                                      className="hover:text-secondary font-bold p-0.5"
                                      title="Advance Stage"
                                    >
                                      → Next
                                    </button>
                                  )}
                                </div>

                                <button
                                  onClick={() => onDeleteApplication && onDeleteApplication(item.id)}
                                  className="text-outline hover:text-error text-xs"
                                  title="Remove Application"
                                >
                                  ×
                                </button>
                              </div>
                            </div>
                          );
                        })}

                        {colItems.length === 0 && (
                          <div className="p-4 text-center text-xs text-outline italic rounded border border-dashed border-outline-variant/40 my-auto">
                            No applications here yet
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Custom Application Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-6 shadow-2xl border border-outline-variant/60">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30 mb-4">
              <h3 className="font-headline-sm font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">add_task</span>
                Track New Application
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-outline hover:text-on-surface"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleCreateApplication} className="flex flex-col gap-3">
              <div>
                <label className="text-xs font-semibold text-on-surface block mb-1">Company Name</label>
                <input
                  required
                  value={newCompany}
                  onChange={(e) => setNewCompany(e.target.value)}
                  placeholder="e.g. Google, Microsoft, TechNova"
                  className="w-full text-sm px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/60 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-on-surface block mb-1">Role / Position</label>
                <input
                  required
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  placeholder="e.g. Senior Backend Engineer"
                  className="w-full text-sm px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/60 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-on-surface block mb-1">Expected / Offered CTC</label>
                <input
                  value={newSalary}
                  onChange={(e) => setNewSalary(e.target.value)}
                  placeholder="e.g. ₹15–20 LPA"
                  className="w-full text-sm px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/60 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-on-surface block mb-1">Current Status</label>
                <select
                  value={newStage}
                  onChange={(e) => setNewStage(e.target.value)}
                  className="w-full text-sm px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/60 focus:outline-none focus:border-primary"
                >
                  <option value="applied">Applied (Under Review)</option>
                  <option value="interviewing">Interviewing (Technical / HR)</option>
                  <option value="offer">Offer Extended</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 mt-2 border-t border-outline-variant/30">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-surface-container text-on-surface"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-white hover:bg-primary-container shadow-xs"
                >
                  Save Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Review Offer Modal */}
      {showOfferModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-secondary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/30 rounded-bl-full pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary font-bold text-xl shadow-xs">
                🎉
              </div>
              <div>
                <h3 className="font-headline-sm font-bold text-on-surface">Congratulations!</h3>
                <p className="text-xs text-secondary font-semibold">Offer Extended by {showOfferModal.company}</p>
              </div>
            </div>

            <div className="bg-surface-container-low p-4 rounded-xl mb-4 space-y-2 border border-outline-variant/40">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant font-medium">Designation:</span>
                <span className="font-bold text-on-surface">{showOfferModal.role}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant font-medium">Annual Package:</span>
                <span className="font-bold text-secondary text-base">{showOfferModal.salary}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant font-medium">Status:</span>
                <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-secondary text-xs font-bold">
                  Official Offer Letter Ready
                </span>
              </div>
            </div>

            <p className="text-xs text-on-surface-variant mb-5">
              The talent team at {showOfferModal.company} has released the offer package. You have 7 days to review and digitally countersign.
            </p>

            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setShowOfferModal(null)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-surface-container text-on-surface"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Congratulations! You have accepted the offer from ${showOfferModal.company}! Welcome aboard!`);
                  setShowOfferModal(null);
                }}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-secondary text-on-secondary shadow-xs hover:opacity-90"
              >
                Accept Offer 🚀
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Selected Application Details Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-6 shadow-2xl border border-outline-variant/60">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30 mb-4">
              <div>
                <h3 className="font-headline-sm font-bold text-on-surface">{selectedItem.role}</h3>
                <p className="text-xs text-on-surface-variant">{selectedItem.company}</p>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-outline hover:text-on-surface p-1"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="space-y-3 mb-5">
              <div className="flex justify-between text-xs bg-surface-container-low p-2.5 rounded-lg">
                <span className="text-on-surface-variant font-medium">Stage:</span>
                <span className="font-bold text-primary uppercase">{selectedItem.status}</span>
              </div>
              <div className="flex justify-between text-xs bg-surface-container-low p-2.5 rounded-lg">
                <span className="text-on-surface-variant font-medium">Compensation:</span>
                <span className="font-bold text-on-surface">{selectedItem.salary}</span>
              </div>
              {selectedItem.interviewTime && (
                <div className="flex justify-between text-xs bg-primary/10 p-2.5 rounded-lg border border-primary/20">
                  <span className="text-primary font-medium">Interview:</span>
                  <span className="font-bold text-primary">{selectedItem.interviewTime}</span>
                </div>
              )}
              <div className="bg-surface-container-low p-3 rounded-lg text-xs">
                <span className="text-on-surface-variant font-medium block mb-1">Tracker Notes:</span>
                <p className="text-on-surface">{selectedItem.notes || 'Application tracked in Jobify Pipeline.'}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-outline-variant/30">
              <button
                onClick={() => {
                  if (onDeleteApplication) onDeleteApplication(selectedItem.id);
                  setSelectedItem(null);
                }}
                className="text-xs text-error font-medium hover:underline"
              >
                Remove from Pipeline
              </button>

              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-white hover:bg-primary-container"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PipelineKanban;
