import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import LanguageSwitcher from './components/LanguageSwitcher';
import ProjectDetail from './components/ProjectDetail';
import './i18n';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <LanguageSwitcher />
      <Header />
      <main className="pt-16 md:pt-24">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="relative">
        <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:projectId" element={<ProjectDetail />} />
            </Routes>
          </motion.div>
        )}
      </div>
    </Router>
  );
}

export default App;
