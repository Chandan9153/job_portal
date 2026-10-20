import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import AllPosts from './components/AllPosts';
import Create from './components/Create';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Edit from './components/Edit';
import JobDetails from './components/JobDetails';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [savedModalOpen, setSavedModalOpen] = useState(false);
  const [authModalConfig, setAuthModalConfig] = useState({ open: false, mode: 'login' });
  const [savedCount, setSavedCount] = useState(2);

  // Sync saved count
  useEffect(() => {
    const updateCount = () => {
      try {
        const raw = localStorage.getItem('jobify_saved');
        if (raw) {
          const list = JSON.parse(raw);
          setSavedCount(list.length);
        }
      } catch (e) {}
    };

    updateCount();
    window.addEventListener('storage', updateCount);
    return () => window.removeEventListener('storage', updateCount);
  }, [savedModalOpen]);

  // Handle URL hash or path changes
  useEffect(() => {
    if (location.pathname === '/login') {
      setAuthModalConfig({ open: true, mode: 'login' });
    } else if (location.pathname === '/register') {
      setAuthModalConfig({ open: true, mode: 'signup' });
    }
  }, [location.pathname]);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavClick}
        savedCount={savedCount}
        onOpenSaved={() => setSavedModalOpen(true)}
        onOpenAuth={(mode) => setAuthModalConfig({ open: true, mode })}
      />

      <main className="w-full pt-16 flex-1 bg-surface min-h-[calc(100vh-64px)]">
        <Routes>
          <Route
            path="/"
            element={
              <AllPosts
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                savedModalOpen={savedModalOpen}
                setSavedModalOpen={setSavedModalOpen}
                authModalConfig={authModalConfig}
                setAuthModalConfig={setAuthModalConfig}
              />
            }
          />
          <Route
            path="/login"
            element={
              <AllPosts
                activeTab="home"
                setActiveTab={setActiveTab}
                savedModalOpen={savedModalOpen}
                setSavedModalOpen={setSavedModalOpen}
                authModalConfig={{ open: true, mode: 'login' }}
                setAuthModalConfig={setAuthModalConfig}
              />
            }
          />
          <Route
            path="/register"
            element={
              <AllPosts
                activeTab="home"
                setActiveTab={setActiveTab}
                savedModalOpen={savedModalOpen}
                setSavedModalOpen={setSavedModalOpen}
                authModalConfig={{ open: true, mode: 'signup' }}
                setAuthModalConfig={setAuthModalConfig}
              />
            }
          />
          <Route path="/job-details" element={<JobDetails />} />
          <Route
            path="/create"
            element={
              <ProtectedRoute requireAdmin={true}>
                <Create />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit"
            element={
              <ProtectedRoute requireAdmin={true}>
                <Edit />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer
        onNavigate={(tab) => {
          if (tab === 'post-job') {
            navigate('/create');
          } else {
            handleNavClick(tab);
          }
        }}
      />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
