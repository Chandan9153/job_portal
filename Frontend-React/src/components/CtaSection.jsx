import React from 'react';

const CtaSection = ({ onExploreJobs, onGetStarted }) => {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        <div className="relative overflow-hidden rounded-2xl bg-inverse-surface text-inverse-on-surface p-space-lg md:p-space-xl shadow-xl">
          {/* Ambient Radial Glow */}
          <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary/40 blur-3xl"></div>
          <div className="pointer-events-none absolute left-10 -top-20 w-80 h-80 rounded-full bg-secondary/30 blur-3xl"></div>

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-space-sm py-1 rounded-full bg-surface/10 text-secondary-container font-label-sm text-label-sm uppercase font-bold tracking-wider mb-space-sm">
              Get Hired Faster
            </span>
            <h2 className="font-display-hero text-display-hero-mobile lg:text-headline-lg text-inverse-on-surface font-extrabold tracking-tight mb-space-sm">
              Your Next Opportunity Is Waiting.
            </h2>
            <p className="font-body-lg text-body-lg text-outline-variant max-w-xl mb-space-lg">
              Take the decisive step in your career today. Join over 50,000+ candidates who discover engineering and tech jobs without the friction.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm mb-space-md">
              <button
                onClick={onExploreJobs}
                className="h-11 px-space-lg inline-flex items-center justify-center rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors shadow-sm cursor-pointer"
                type="button"
              >
                Explore All Jobs
              </button>
              <button
                onClick={onGetStarted}
                className="h-11 px-space-lg inline-flex items-center justify-center rounded-lg border border-outline-variant/60 text-inverse-on-surface hover:bg-surface/10 font-label-md text-label-md transition-colors cursor-pointer"
                type="button"
              >
                Create Free Account
              </button>
            </div>

            <p className="font-body-sm text-body-sm text-outline-variant flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
              <span>No credit card required. Free for all job seekers.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
