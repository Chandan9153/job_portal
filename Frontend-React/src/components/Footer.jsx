import React from 'react';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/40 text-on-surface-variant">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl">
          {/* Brand & Socials Column */}
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-[20px]">work</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
                Jobify
              </span>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Discover meaningful career opportunities and connect with top employers. Built for modern engineers, creators, and builders.
            </p>

            <div className="flex items-center gap-space-sm pt-space-xs">
              <a
                aria-label="Twitter"
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary-container hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">alternate_email</span>
              </a>
              <a
                aria-label="LinkedIn"
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary-container hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">corporate_fare</span>
              </a>
              <a
                aria-label="GitHub"
                href="#github"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary-container hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">code</span>
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div className="flex flex-col gap-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              For Job Seekers
            </h3>
            <ul className="flex flex-col gap-space-xs font-body-md text-body-md">
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('jobs')}
                  className="hover:text-primary transition-colors text-left bg-transparent border-0 p-0 text-on-surface-variant cursor-pointer text-sm"
                >
                  Find Jobs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('jobs')}
                  className="hover:text-primary transition-colors text-left bg-transparent border-0 p-0 text-on-surface-variant cursor-pointer text-sm"
                >
                  Browse Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('internships')}
                  className="hover:text-primary transition-colors text-left bg-transparent border-0 p-0 text-on-surface-variant cursor-pointer text-sm"
                >
                  Internships
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('resources')}
                  className="hover:text-primary transition-colors text-left bg-transparent border-0 p-0 text-on-surface-variant cursor-pointer text-sm"
                >
                  Career Resources
                </button>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="flex flex-col gap-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              For Employers
            </h3>
            <ul className="flex flex-col gap-space-xs font-body-md text-body-md">
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('post-job')}
                  className="hover:text-primary transition-colors text-left bg-transparent border-0 p-0 text-on-surface-variant cursor-pointer text-sm"
                >
                  Post a Job
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('companies')}
                  className="hover:text-primary transition-colors text-left bg-transparent border-0 p-0 text-on-surface-variant cursor-pointer text-sm"
                >
                  Explore Talent
                </button>
              </li>
              <li>
                <span className="text-on-surface-variant text-sm cursor-pointer hover:text-primary">
                  Pricing Plans
                </span>
              </li>
              <li>
                <span className="text-on-surface-variant text-sm cursor-pointer hover:text-primary">
                  Hiring Solutions
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Company
            </h3>
            <ul className="flex flex-col gap-space-xs font-body-md text-body-md">
              <li>
                <span className="text-on-surface-variant text-sm cursor-pointer hover:text-primary">
                  About Us
                </span>
              </li>
              <li>
                <span className="text-on-surface-variant text-sm cursor-pointer hover:text-primary">
                  Contact
                </span>
              </li>
              <li>
                <span className="text-on-surface-variant text-sm cursor-pointer hover:text-primary">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-on-surface-variant text-sm cursor-pointer hover:text-primary">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & operational status */}
        <div className="mt-space-xl pt-space-lg border-t border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
          <p>© 2025 Jobify Inc. All rights reserved. Crafted for engineers and builders.</p>
          <div className="flex items-center gap-space-md">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span>All systems operational</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
