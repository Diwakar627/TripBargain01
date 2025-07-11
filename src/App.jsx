import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DownloadSection from './components/DownloadSection';
import AboutSection from './components/AboutSection';
import AppDemoSection from './components/AppDemoSection';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutUsPage from './pages/AboutUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import SupportPage from './pages/SupportPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTopButton from './components/ScrollToTopButton';

function Home() {
  return (
    <>
      <HeroSection />
      <DownloadSection />
      <AboutSection />
      <AppDemoSection />
      <FeaturesSection />
      <BenefitsSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
