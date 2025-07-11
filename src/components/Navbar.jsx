import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  // Scrollspy for home page
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sectionIds = ['hero', 'features', 'how-it-works', 'about-us', 'testimonials', 'blog'];

    const handleScroll = () => {
      let found = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [menuOpen]);

  const getActiveLink = (href) => {
    const section = activeSection === 'hero' ? '/' : `/${activeSection}`;
    return location.pathname === '/' && href === section;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 flex items-center gap-2 transition duration-200"
        >
          <img src={logo} alt="TripBargain Logo" className="h-8 w-8 object-contain" />
          TripBargain
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          {navLinks.map(({ label, href }, idx) => (
            <li key={idx}>
              <Link
                to={href}
                className={`transition-colors duration-200 hover:text-orange-500 ${
                  getActiveLink(href) ? 'text-orange-500 font-bold' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="/app.zip"
          download
          className="hidden md:inline bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 text-sm font-semibold transition duration-200"
        >
          Download APK
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl text-gray-800">&#10005;</span>
          ) : (
            <div className="space-y-1">
              <span className="block h-1 w-6 bg-gray-800 rounded"></span>
              <span className="block h-1 w-6 bg-gray-800 rounded"></span>
              <span className="block h-1 w-6 bg-gray-800 rounded"></span>
            </div>
          )}
        </button>
      </nav>

      {/* Mobile Slide-In Sidebar Only */}
      <aside
        className={`md:hidden fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Close menu"
        >
          &#10005;
        </button>

        {/* Nav Links */}
        <ul className="flex flex-col space-y-4 text-base font-medium text-gray-700 p-6 pt-16">
          {navLinks.map(({ label, href }, idx) => (
            <li key={idx}>
              <Link
                to={href}
                onClick={() => setMenuOpen(false)}
                className={`transition-colors duration-200 hover:text-orange-500 ${
                  getActiveLink(href) ? 'text-orange-500 font-bold' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/app.zip"
              download
              className="block bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 text-sm font-semibold transition duration-200 text-center mt-4"
            >
              Download APK
            </a>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Navbar;
