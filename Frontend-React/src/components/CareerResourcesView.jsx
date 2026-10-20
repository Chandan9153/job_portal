import React, { useState } from 'react';

const CareerResourcesView = () => {
  const [activeResource, setActiveResource] = useState('cheatsheet');
  const [ctcLakhs, setCtcLakhs] = useState(12);

  // Approximate calculation
  const inHandMonthly = Math.round((ctcLakhs * 100000 * 0.78) / 12);
  const taxMonthly = Math.round((ctcLakhs * 100000 * 0.15) / 12);
  const pfMonthly = Math.round((ctcLakhs * 100000 * 0.07) / 12);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-margin-mobile lg:px-margin py-space-xl">
      <div className="text-center max-w-2xl mx-auto mb-space-lg">
        <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
          Career Accelerator
        </span>
        <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold tracking-tight">
          Engineering Career Resources & Prep
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Curated guides, compensation calculators, and technical cheat sheets to crack your dream offer.
        </p>
      </div>

      {/* Navigation Pills */}
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveResource('cheatsheet')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeResource === 'cheatsheet'
              ? 'bg-primary-container text-white shadow-sm'
              : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant'
          }`}
        >
          Interview Cheat Sheets
        </button>
        <button
          onClick={() => setActiveResource('calculator')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeResource === 'calculator'
              ? 'bg-primary-container text-white shadow-sm'
              : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant'
          }`}
        >
          CTC & In-Hand Calculator
        </button>
        <button
          onClick={() => setActiveResource('resume')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeResource === 'resume'
              ? 'bg-primary-container text-white shadow-sm'
              : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant'
          }`}
        >
          Resume & Portfolio Checklist
        </button>
      </div>

      {/* Content 1: Interview Cheat Sheet */}
      {activeResource === 'cheatsheet' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          <div className="bg-surface-container-lowest p-space-md rounded-xl border border-outline-variant/50 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center font-bold mb-3">
              <span className="material-symbols-outlined text-[20px]">code</span>
            </div>
            <h3 className="font-headline-sm font-bold text-on-surface mb-1">Frontend Engineering</h3>
            <p className="text-xs text-on-surface-variant mb-4">React 18 fiber, Virtual DOM reconciliation, custom hooks, memory leaks, Next.js hydration, Web Vitals.</p>
            <div className="bg-surface-container-low p-3 rounded-lg text-xs space-y-1 font-mono text-primary">
              <div>• useEffect dependency traps & cleanup</div>
              <div>• useMemo & useCallback trade-offs</div>
              <div>• SSR vs SSG vs ISR architecture</div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-xl border border-outline-variant/50 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-secondary flex items-center justify-center font-bold mb-3">
              <span className="material-symbols-outlined text-[20px]">dns</span>
            </div>
            <h3 className="font-headline-sm font-bold text-on-surface mb-1">Spring Boot & Microservices</h3>
            <p className="text-xs text-on-surface-variant mb-4">Dependency Injection, AOP, Hibernate caching, transaction management, connection pooling, JWT security.</p>
            <div className="bg-surface-container-low p-3 rounded-lg text-xs space-y-1 font-mono text-secondary">
              <div>• @Transactional isolation levels</div>
              <div>• N+1 problem & JOIN FETCH queries</div>
              <div>• Spring Security filter chain</div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-xl border border-outline-variant/50 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center font-bold mb-3">
              <span className="material-symbols-outlined text-[20px]">architecture</span>
            </div>
            <h3 className="font-headline-sm font-bold text-on-surface mb-1">System Design Fundamentals</h3>
            <p className="text-xs text-on-surface-variant mb-4">CAP theorem, horizontal vs vertical scaling, Redis caching strategies, rate limiting, Kafka message brokers.</p>
            <div className="bg-surface-container-low p-3 rounded-lg text-xs space-y-1 font-mono text-tertiary">
              <div>• Consistent hashing & sharding</div>
              <div>• Write-through vs Write-back cache</div>
              <div>• Token bucket & Leaky bucket algorithms</div>
            </div>
          </div>
        </div>
      )}

      {/* Content 2: Salary Calculator */}
      {activeResource === 'calculator' && (
        <div className="max-w-2xl mx-auto bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant/50 shadow-md">
          <h3 className="font-headline-md font-bold text-on-surface mb-2">
            Annual CTC to Monthly Take-Home Calculator
          </h3>
          <p className="text-xs text-on-surface-variant mb-6">
            Estimate your realistic monthly in-hand compensation based on Indian standard tax brackets and statutory deductions.
          </p>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-on-surface">Annual CTC (₹ Lakhs)</span>
              <span className="text-lg font-bold text-primary">₹{ctcLakhs} LPA</span>
            </div>
            <input
              type="range"
              min="3"
              max="50"
              step="0.5"
              value={ctcLakhs}
              onChange={(e) => setCtcLakhs(Number(e.target.value))}
              className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-outline mt-1 font-medium">
              <span>₹3 LPA</span>
              <span>₹25 LPA</span>
              <span>₹50 LPA</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant/40 text-center">
            <div className="p-2">
              <span className="text-xs text-on-surface-variant block">Estimated Monthly In-Hand</span>
              <span className="text-xl font-bold text-secondary">₹{inHandMonthly.toLocaleString('en-IN')}</span>
            </div>
            <div className="p-2 border-t sm:border-t-0 sm:border-l border-outline-variant/30">
              <span className="text-xs text-on-surface-variant block">Approx. Income Tax (TDS)</span>
              <span className="text-lg font-semibold text-on-surface">₹{taxMonthly.toLocaleString('en-IN')}/mo</span>
            </div>
            <div className="p-2 border-t sm:border-t-0 sm:border-l border-outline-variant/30">
              <span className="text-xs text-on-surface-variant block">Provident Fund (PF)</span>
              <span className="text-lg font-semibold text-on-surface">₹{pfMonthly.toLocaleString('en-IN')}/mo</span>
            </div>
          </div>

          <p className="text-[11px] text-outline mt-4 italic text-center">
            *Figures are estimates based on standard exemptions under the New Tax Regime.
          </p>
        </div>
      )}

      {/* Content 3: Resume Checklist */}
      {activeResource === 'resume' && (
        <div className="max-w-2xl mx-auto bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant/50 shadow-md space-y-4">
          <h3 className="font-headline-md font-bold text-on-surface mb-1">
            ATS-Friendly Technical Resume Blueprint
          </h3>
          <p className="text-xs text-on-surface-variant mb-4">
            Follow these benchmarks tested across 500+ engineering recruiters to pass automated screening.
          </p>

          <div className="space-y-3">
            {[
              { title: 'Single-Column Clean Layout', desc: 'Avoid multi-column tables and text boxes that confuse applicant tracking parsers (Workday, Greenhouse).' },
              { title: 'Quantified Impact (Google XYZ Formula)', desc: 'Accomplished [X], as measured by [Y], by doing [Z]. Example: "Reduced API latency by 42% by indexing SQL queries."' },
              { title: 'Clickable Live Links', desc: 'Include live HTTPS URLs for your GitHub repo, deployed applications, and LinkedIn.' },
              { title: 'Categorized Tech Stack', desc: 'Group skills by Languages (Java, TS), Frameworks (React, Spring Boot), and Cloud & Tools (Docker, AWS, Git).' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
                <div>
                  <h4 className="font-semibold text-sm text-on-surface">{item.title}</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerResourcesView;
