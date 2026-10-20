import React from 'react';

const StatsStrip = ({ totalJobs = 1420 }) => {
  return (
    <section className="w-full bg-surface border-b border-outline-variant/40 py-space-md">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div className="shrink-0">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider block">
              Trusted by Job Seekers
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Built for your next career move
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md lg:gap-space-xl divide-x-0 md:divide-x divide-outline-variant/40 flex-1">
            <div className="md:pl-space-lg first:pl-0">
              <span className="font-headline-lg text-headline-lg font-bold text-on-surface block tracking-tight">
                {totalJobs > 0 ? `${totalJobs}+` : '10k+'}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Live Job Listings
              </span>
            </div>
            <div className="md:pl-space-lg">
              <span className="font-headline-lg text-headline-lg font-bold text-on-surface block tracking-tight">
                2.5k+
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Sample Employers
              </span>
            </div>
            <div className="md:pl-space-lg">
              <span className="font-headline-lg text-headline-lg font-bold text-on-surface block tracking-tight">
                1.2k+
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Sample Internships
              </span>
            </div>
            <div className="md:pl-space-lg">
              <span className="font-headline-lg text-headline-lg font-bold text-on-surface block tracking-tight">
                50k+
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Sample Job Seekers
              </span>
            </div>
          </div>

          <div className="text-left lg:text-right shrink-0">
            <span className="font-body-sm text-body-sm text-outline italic">
              Demonstration platform metrics
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
