import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ activeTab, setActiveTab, savedCount = 0, onOpenSaved, onOpenAuth }) => {
  const { user, logout, isAdmin, loginAsDemo } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'jobs', label: 'Find Jobs' },
    { id: 'companies', label: 'Companies' },
    { id: 'internships', label: 'Internships' },
    { id: 'pipeline', label: 'My Pipeline' },
    { id: 'resources', label: 'Career Resources' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-outline-variant/40 transition-all">
      <div className="h-16 max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
        {/* Brand Logo */}
        <div className="flex items-center gap-space-lg">
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-space-sm text-primary-container decoration-0 bg-transparent border-0 cursor-pointer p-0"
          >
            <div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shadow-sm hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">work</span>
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">Jobify</span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-space-md xl:gap-gutter h-16 relative">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex items-center h-full px-space-xs font-label-md text-label-md transition-colors bg-transparent border-0 cursor-pointer ${
                  isActive
                    ? "text-primary-container font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-primary-container after:rounded-t-full"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons & User State */}
        <div className="flex items-center gap-space-sm">
          {/* Saved Jobs Quick Button */}
          <button
            onClick={onOpenSaved}
            className="relative p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant/30"
            title="View Saved Jobs"
          >
            <span className="material-symbols-outlined text-[22px]">bookmark</span>
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary-container text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                {savedCount}
              </span>
            )}
          </button>

          {/* Admin Create Job Shortcut */}
          {isAdmin() && (
            <button
              onClick={() => navigate('/create')}
              className="hidden sm:inline-flex items-center gap-1.5 h-9 px-space-sm rounded-lg bg-secondary text-on-secondary font-label-md text-label-md shadow-xs hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              <span>Post Job</span>
            </button>
          )}

          {/* User Auth Buttons or Profile */}
          {!user ? (
            <div className="hidden md:flex items-center gap-space-sm">
              <button
                onClick={() => onOpenAuth('login')}
                className="h-10 px-space-md inline-flex items-center justify-center rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors"
              >
                Log In
              </button>
              <button
                onClick={() => onOpenAuth('signup')}
                className="h-10 px-space-md inline-flex items-center justify-center rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary transition-colors"
              >
                Get Started
              </button>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-surface-container-low transition-colors border border-outline-variant/30"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-white font-semibold text-xs">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="hidden sm:block text-left text-xs">
                  <p className="font-semibold text-on-surface truncate max-w-[100px] leading-tight">{user.name}</p>
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${isAdmin() ? 'bg-secondary-container text-secondary' : 'bg-primary-fixed text-primary'}`}>
                    {isAdmin() ? 'Admin' : 'Job Seeker'}
                  </span>
                </div>
                <span className="material-symbols-outlined text-outline text-[18px]">expand_more</span>
              </button>

              {/* Profile Dropdown */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/60 py-2 z-50">
                  <div className="px-4 py-2 border-b border-outline-variant/30">
                    <p className="font-semibold text-sm text-on-surface truncate">{user.name}</p>
                    <p className="text-xs text-on-surface-variant truncate">{user.email}</p>
                    <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-surface-container text-primary">
                      Role: {user.role || 'USER'}
                    </span>
                  </div>

                  <div className="py-1">
                    <button
                      onClick={() => {
                        setActiveTab('pipeline');
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-low flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">view_kanban</span>
                      <span>My Applications</span>
                    </button>
                    <button
                      onClick={() => {
                        onOpenSaved();
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-low flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">bookmark</span>
                      <span>Saved Jobs ({savedCount})</span>
                    </button>
                    {isAdmin() && (
                      <button
                        onClick={() => {
                          navigate('/create');
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-secondary hover:bg-surface-container-low flex items-center gap-2 font-medium"
                      >
                        <span className="material-symbols-outlined text-[18px]">add_circle</span>
                        <span>Post a New Job</span>
                      </button>
                    )}
                  </div>

                  <div className="border-t border-outline-variant/30 pt-1">
                    <button
                      onClick={() => {
                        logout();
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-error hover:bg-surface-container-low flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">logout</span>
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Demo User Switcher if not logged in */}
          {!user && (
            <button
              onClick={() => loginAsDemo('USER')}
              className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg bg-surface-container hover:bg-surface-container-high text-primary transition-colors"
              title="Quickly test with demo job seeker account"
            >
              <span className="material-symbols-outlined text-[15px]">auto_fix_high</span>
              <span>Demo Login</span>
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-space-xs rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 bg-surface-container-lowest border-b border-outline-variant/40 p-margin shadow-lg lg:hidden flex flex-col gap-space-md">
          <nav className="flex flex-col gap-space-xs">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-space-md py-space-sm rounded-lg text-left font-label-md text-label-md transition-colors ${
                    isActive
                      ? "text-primary-container font-semibold bg-surface-container-low"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex flex-col gap-space-sm pt-space-md border-t border-outline-variant/40">
            {!user ? (
              <>
                <button
                  onClick={() => {
                    onOpenAuth('login');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full h-11 inline-flex items-center justify-center rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    onOpenAuth('signup');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full h-11 inline-flex items-center justify-center rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary transition-colors"
                >
                  Get Started
                </button>
                <button
                  onClick={() => {
                    loginAsDemo('USER');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full h-9 inline-flex items-center justify-center rounded-lg bg-surface-container text-primary font-label-sm text-label-sm"
                >
                  Quick Demo Seeker Login
                </button>
              </>
            ) : (
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm">{user.name}</p>
                  <p className="text-xs text-on-surface-variant">{user.email}</p>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-1 text-xs rounded bg-surface-container text-error font-medium"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
