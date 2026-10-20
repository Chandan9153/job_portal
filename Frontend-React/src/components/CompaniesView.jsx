import React from 'react';
import { COMPANIES_DATA } from '../utils/jobData';

const CompaniesView = ({ onSelectCompany }) => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-margin-mobile lg:px-margin py-space-xl">
      <div className="text-center max-w-2xl mx-auto mb-space-xl">
        <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
          Top Employers
        </span>
        <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold tracking-tight">
          Explore Verified Hiring Companies
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Connect directly with technical hiring managers and engineering leaders across verified tech leaders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
        {COMPANIES_DATA.map((company) => (
          <div
            key={company.name}
            className="bg-surface-container-lowest p-space-md rounded-xl border border-outline-variant/50 shadow-sm hover:shadow-md hover:border-primary-container transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary font-bold flex items-center justify-center text-lg">
                    {company.short}
                  </div>
                  <div>
                    <h3 className="font-headline-sm font-bold text-on-surface flex items-center gap-1">
                      {company.name}
                      <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
                    </h3>
                    <p className="text-xs text-on-surface-variant">{company.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-secondary-fixed/40 px-2 py-0.5 rounded-full text-secondary text-xs font-bold">
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span>{company.rating}</span>
                </div>
              </div>

              <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
                {company.tagline}
              </p>

              <div className="grid grid-cols-2 gap-2 p-2.5 bg-surface-container-low rounded-lg text-xs mb-4">
                <div>
                  <span className="text-outline block">Company Size</span>
                  <span className="font-semibold text-on-surface">{company.size}</span>
                </div>
                <div>
                  <span className="text-outline block">Industry</span>
                  <span className="font-semibold text-on-surface truncate block">{company.industry}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between">
              <span className="text-xs font-semibold text-primary">
                {company.openRolesCount} Open Positions
              </span>
              <button
                onClick={() => onSelectCompany(company.name)}
                className="px-3.5 py-1.5 rounded-lg bg-primary-container text-white text-xs font-semibold hover:bg-primary transition-colors cursor-pointer"
              >
                View Jobs
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesView;
