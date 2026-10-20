import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AuthModal = ({ mode = 'login', onClose }) => {
  const [currentMode, setCurrentMode] = useState(mode); // 'login' | 'signup'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, register, loginAsDemo } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (currentMode === 'login') {
        const result = await login(email, password);
        if (result.success) {
          onClose();
        } else {
          setError(result.message || 'Login failed.');
        }
      } else {
        const result = await register(name, email, password, role);
        if (result.success) {
          onClose();
        } else {
          setError(result.message || 'Registration failed.');
        }
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = (demoRole) => {
    loginAsDemo(demoRole);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-outline-variant/60 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-outline hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        {/* Brand Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shadow-xs">
            <span className="material-symbols-outlined text-[18px]">work</span>
          </div>
          <span className="font-headline-sm font-bold text-on-surface">Jobify</span>
        </div>

        <h3 className="font-headline-md font-bold text-on-surface mb-1">
          {currentMode === 'login' ? 'Welcome Back' : 'Create Free Account'}
        </h3>
        <p className="text-xs text-on-surface-variant mb-4">
          {currentMode === 'login'
            ? 'Sign in to access your saved jobs, applications, and recommendations.'
            : 'Join over 50,000+ candidates finding engineering roles without friction.'}
        </p>

        {/* Quick Demo Logins Bar */}
        <div className="mb-4 p-3 bg-surface-container-low rounded-xl border border-outline-variant/40">
          <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-2">
            🚀 1-Click Instant Demo Login:
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleDemoLogin('USER')}
              className="py-1.5 px-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant/40 text-xs font-semibold flex items-center justify-center gap-1 transition-all"
            >
              <span className="material-symbols-outlined text-[15px] text-primary">person</span>
              <span>Job Seeker</span>
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('ADMIN')}
              className="py-1.5 px-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant/40 text-xs font-semibold flex items-center justify-center gap-1 transition-all"
            >
              <span className="material-symbols-outlined text-[15px] text-secondary">admin_panel_settings</span>
              <span>Recruiter Admin</span>
            </button>
          </div>
        </div>

        <div className="relative flex py-2 items-center mb-4">
          <div className="flex-grow border-t border-outline-variant/40"></div>
          <span className="flex-shrink mx-3 text-[11px] text-outline uppercase font-semibold">Or with credentials</span>
          <div className="flex-grow border-t border-outline-variant/40"></div>
        </div>

        {error && (
          <div className="mb-3 p-2.5 rounded-lg bg-error-container text-on-error-container text-xs font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          {currentMode === 'signup' && (
            <div>
              <label className="text-xs font-semibold text-on-surface block mb-1">Full Name</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Johnson"
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/60 focus:outline-none focus:border-primary"
              />
            </div>
          )}

          <div>
            <label className="text-xs font-semibold text-on-surface block mb-1">Email Address</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@example.com"
              className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/60 focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-on-surface block mb-1">Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/60 focus:outline-none focus:border-primary"
            />
          </div>

          {currentMode === 'signup' && (
            <div>
              <label className="text-xs font-semibold text-on-surface block mb-1">Account Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg bg-surface-container-low border border-outline-variant/60 focus:outline-none focus:border-primary"
              >
                <option value="USER">Job Seeker</option>
                <option value="ADMIN">Employer / Recruiter (Can Post Jobs)</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 h-10 rounded-lg bg-primary text-white font-semibold text-xs shadow-sm hover:bg-primary-container active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
          >
            {loading ? (
              <span>Processing...</span>
            ) : (
              <span>{currentMode === 'login' ? 'Sign In' : 'Create Free Account'}</span>
            )}
          </button>
        </form>

        <div className="mt-4 pt-3 border-t border-outline-variant/30 text-center text-xs text-on-surface-variant">
          {currentMode === 'login' ? (
            <span>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setCurrentMode('signup');
                  setError('');
                }}
                className="font-semibold text-primary hover:underline bg-transparent border-0 cursor-pointer p-0"
              >
                Sign up free
              </button>
            </span>
          ) : (
            <span>
              Already registered?{' '}
              <button
                type="button"
                onClick={() => {
                  setCurrentMode('login');
                  setError('');
                }}
                className="font-semibold text-primary hover:underline bg-transparent border-0 cursor-pointer p-0"
              >
                Sign in
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
