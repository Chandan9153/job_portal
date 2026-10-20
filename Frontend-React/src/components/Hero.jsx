import React from 'react';

const Hero = ({
  searchKeyword,
  setSearchKeyword,
  searchLocation,
  setSearchLocation,
  onSearch,
  onQuickApplyHero,
  heroJob
}) => {
  const popularTags = [
    'Java Developer',
    'Frontend Developer',
    'Software Engineer',
    'Data Analyst',
    'Internships'
  ];

  const handleTagClick = (tag) => {
    setSearchKeyword(tag);
    if (onSearch) {
      onSearch(tag, searchLocation);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchKeyword, searchLocation);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest pt-space-lg pb-space-xl lg:py-space-xl border-b border-outline-variant/30">
      {/* Ambient Backdrop Glowing Blobs */}
      <div className="pointer-events-none absolute -top-40 right-10 w-[540px] h-[540px] rounded-full bg-primary-fixed/30 blur-3xl opacity-60"></div>
      <div className="pointer-events-none absolute top-1/2 left-0 w-[420px] h-[420px] rounded-full bg-secondary-container/20 blur-3xl opacity-50"></div>

      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Column: Copy & Search */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider mb-space-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="font-bold">Your Career, Your Next Chapter</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface font-extrabold tracking-tight mb-space-md leading-tight">
              Find the <span className="text-primary-container bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">Right Job</span>.<br className="hidden sm:inline" />
              Build the Future You Want.
            </h1>

            {/* Subtitle */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-lg">
              Discover meaningful career opportunities, connect directly with verified high-growth teams, and take the next confident step in your technical journey.
            </p>

            {/* Search Card Form */}
            <div className="w-full bg-surface-container-lowest rounded-xl p-space-sm md:p-space-md shadow-md bg-white border border-outline-variant/50 mb-space-md transition-shadow hover:shadow-lg">
              <form className="flex flex-col md:flex-row items-stretch gap-space-xs" onSubmit={handleSubmit}>
                {/* Keyword Input */}
                <div className="relative flex-1 flex items-center bg-surface-container-low rounded-lg px-space-sm h-11 border border-transparent focus-within:border-primary-container focus-within:bg-white transition-all">
                  <span className="material-symbols-outlined text-outline text-[20px] mr-space-xs">work_outline</span>
                  <input
                    className="w-full bg-transparent border-0 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
                    id="job-keyword-input"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="Role, skill, or company (e.g. React, Java)"
                    type="text"
                  />
                  {searchKeyword && (
                    <button
                      type="button"
                      onClick={() => setSearchKeyword('')}
                      className="text-outline hover:text-on-surface p-1"
                    >
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  )}
                </div>

                {/* Location Input */}
                <div className="relative flex-1 flex items-center bg-surface-container-low rounded-lg px-space-sm h-11 border border-transparent focus-within:border-primary-container focus-within:bg-white transition-all">
                  <span className="material-symbols-outlined text-outline text-[20px] mr-space-xs">location_on</span>
                  <input
                    className="w-full bg-transparent border-0 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
                    id="location-input"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    placeholder="Bengaluru, Pune, or Remote"
                    type="text"
                  />
                  {searchLocation && (
                    <button
                      type="button"
                      onClick={() => setSearchLocation('')}
                      className="text-outline hover:text-on-surface p-1"
                    >
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  )}
                </div>

                {/* Action CTA */}
                <button
                  className="h-11 px-space-lg inline-flex items-center justify-center gap-space-xs rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary transition-all active:scale-[0.99] shrink-0 cursor-pointer"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[18px]">search</span>
                  <span>Search Jobs</span>
                </button>
              </form>
            </div>

            {/* Popular Search Tags */}
            <div className="flex flex-wrap items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <span className="font-label-sm text-label-sm text-on-surface-variant/80 uppercase font-semibold">Popular:</span>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-space-sm py-1 rounded-full text-body-sm transition-all cursor-pointer ${
                    searchKeyword === tag
                      ? 'bg-primary-container text-white font-semibold shadow-xs'
                      : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                  }`}
                  type="button"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive UI Preview Stack */}
          <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow Effect Under Card */}
              <div className="absolute inset-4 bg-primary/15 rounded-2xl filter blur-2xl -z-10"></div>

              {/* Primary Highlight Card: Senior Full-Stack Engineer */}
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xl border border-outline-variant/60 relative hover:border-primary transition-all hover:shadow-2xl">
                <div className="flex items-start justify-between gap-space-md mb-space-md">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold shadow-sm">
                      {heroJob?.companyShort || "TN"}
                    </div>
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug">
                        {heroJob?.postProfile || "Senior Full-Stack Engineer"}
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                        <span>{heroJob?.companyName || "TechNova Solutions"}</span>
                        <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                        <span className="text-secondary font-medium flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[14px]">verified</span>
                          Verified Partner
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed/50 text-secondary font-label-sm text-label-sm font-semibold">
                    <span className="material-symbols-outlined text-[14px]">bolt</span>
                    <span>{heroJob?.matchRate || "98% Match"}</span>
                  </div>
                </div>

                {/* Metadata Row */}
                <div className="grid grid-cols-3 gap-space-xs py-space-sm mb-space-sm bg-surface-container-low rounded-lg px-space-sm text-center">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">Compensation</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {heroJob?.salary || "₹18–24 LPA"}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">Type</span>
                    <span className="font-body-md text-body-md text-on-surface font-medium">
                      {heroJob?.employmentType || "Full-time"}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">Workplace</span>
                    <span className="font-body-md text-body-md text-on-surface font-medium truncate">
                      {heroJob?.jobLocation || "Bengaluru (Hybrid)"}
                    </span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap items-center gap-1.5 mb-space-md">
                  {(heroJob?.postTechStack || ["React", "TypeScript", "Node.js", "PostgreSQL"]).map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-body-sm text-body-sm font-medium hover:bg-surface-container-high transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Card Action Button */}
                <div className="flex items-center justify-between pt-space-xs border-t border-outline-variant/40">
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
                    <span>Posted {heroJob?.postedAgo || "2h ago"}</span>
                  </span>
                  <button
                    onClick={() => onQuickApplyHero && onQuickApplyHero(heroJob)}
                    className="h-9 px-space-md inline-flex items-center gap-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md shadow-sm hover:opacity-95 active:scale-95 transition-all cursor-pointer"
                    type="button"
                  >
                    <span>Quick Apply</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Floating Card 1: Application Interview Scheduled */}
              <div 
                className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-surface-container-lowest p-space-sm rounded-xl shadow-xl border border-outline-variant/60 flex items-center gap-space-sm max-w-xs animate-float z-20"
                style={{ animationDuration: '4.5s' }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
                  <span className="material-symbols-outlined text-[22px]">calendar_month</span>
                </div>
                <div className="min-w-0">
                  <span className="font-label-md text-label-md text-on-surface block leading-tight font-semibold">
                    Interview Scheduled
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    TechNova • Tuesday, 10:00 AM
                  </p>
                </div>
              </div>

              {/* Floating Card 2: Active Matches Radar */}
              <div className="absolute -top-6 -right-2 sm:-right-4 bg-surface-container-lowest p-space-sm rounded-xl shadow-lg border border-outline-variant/60 flex items-center gap-space-sm z-20">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined text-[18px]">radar</span>
                  <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
                </div>
                <div>
                  <span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-none block">
                    48 New
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block">
                    Matches Today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
