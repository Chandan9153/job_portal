import React from 'react';

const HowItWorks = ({ onGetStarted }) => {
  const steps = [
    {
      num: '01',
      badgeBg: 'bg-primary text-on-primary',
      title: 'Create Your Profile',
      desc: 'Showcase your skills, target compensation, and past projects with our intuitive profile builder.'
    },
    {
      num: '02',
      badgeBg: 'bg-primary-container text-on-primary',
      title: 'Discover Relevant Jobs',
      desc: 'Explore verified opportunities scored by our high-precision role matching and compatibility engine.'
    },
    {
      num: '03',
      badgeBg: 'bg-secondary text-on-secondary',
      title: 'Apply With Confidence',
      desc: 'Submit 1-click tailored applications directly to recruiters and follow real-time interview updates.'
    }
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-space-xl border-b border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
            Streamlined Process
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold tracking-tight">
            Three Steps to Your Next Opportunity
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            A seamless path from setting up your qualifications to accepting your offer.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative bg-surface-container-low rounded-xl p-space-lg border border-outline-variant/40 flex flex-col items-start hover:border-primary-container hover:shadow-md transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${step.badgeBg} font-headline-sm text-headline-sm font-bold flex items-center justify-center mb-space-md shadow-sm group-hover:scale-105 transition-transform`}
              >
                {step.num}
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                {step.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
