/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './lib/firebase';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import Communities from './pages/Communities';
import Jobs from './pages/Jobs';
import AIAssistant from './pages/AIAssistant';
import Navbar from './components/layout/Navbar';
import { Toaster } from './components/ui/sonner';
import { AnimatePresence, motion } from 'motion/react';

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-zinc-950">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-white text-zinc-950 selection:bg-black/5 selection:text-black">
        {user && <Navbar />}
        <main className={user ? "pt-24" : "pt-0"}>
          <PageTransition>
            <Routes>
              <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Landing />} />
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
              <Route path="/feed" element={user ? <Feed /> : <Navigate to="/" />} />
              <Route path="/profile/:username" element={user ? <Profile /> : <Navigate to="/" />} />
              <Route path="/communities" element={user ? <Communities /> : <Navigate to="/" />} />
              <Route path="/jobs" element={user ? <Jobs /> : <Navigate to="/" />} />
              <Route path="/ai-assistant" element={user ? <AIAssistant /> : <Navigate to="/" />} />
            </Routes>
          </PageTransition>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

