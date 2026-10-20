import React from 'react';
import { CAREER_CATEGORIES } from '../utils/jobData';

const BrowseCategories = ({ onSelectCategory, activeCategory }) => {
  const handleClick = (categoryTitle) => {
    onSelectCategory(categoryTitle);
    const element = document.getElementById('featured-jobs-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-surface-container-lowest py-space-xl border-b border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
            Career Paths
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold tracking-tight">
            Find Your Place in the Industry
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Explore vetted opportunities across key engineering, data, and design disciplines.
          </p>
        </div>

        {/* 4x2 Grid of Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {CAREER_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.title;
            return (
              <button
                key={cat.id}
                onClick={() => handleClick(cat.title)}
                className={`group p-space-md rounded-xl text-left transition-all flex flex-col justify-between border cursor-pointer hover:-translate-y-1 ${
                  isSelected
                    ? 'bg-primary-container/10 border-primary-container shadow-md'
                    : 'bg-surface-container-low hover:bg-surface-container border-outline-variant/40 hover:border-primary-container hover:shadow-sm'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-xs mb-space-md group-hover:scale-110 transition-transform ${
                    isSelected ? 'bg-primary text-white' : 'bg-surface-container-lowest text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px]">{cat.icon}</span>
                </div>
                <div>
                  <h3
                    className={`font-headline-sm text-headline-sm font-semibold transition-colors ${
                      isSelected ? 'text-primary' : 'text-on-surface group-hover:text-primary'
                    }`}
                  >
                    {cat.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center justify-between">
                    <span>{cat.count}</span>
                    <span className="material-symbols-outlined text-[16px] text-outline opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;
