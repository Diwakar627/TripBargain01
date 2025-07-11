import React from 'react';
import heroImage from '../assets/mobile-screen.png'; // Add your mockup image here
import googlePlay from '../assets/google-play.png';
import appStore from '../assets/app-store.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const HeroSection = () => {
  return (
    <section className="bg-white pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Text Block */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-sm text-orange-500 mb-2">India's Smartest Travel Savings App</p>
          <h1 className="text-4xl font-bold leading-snug mb-4">
            Book Cabs, Hotels & More<br />
            <span className="text-orange-500">with TripBargain</span>
          </h1>
          <p className="text-gray-600 mb-6 max-w-md">
            Save big on every ride, stay, and activity. Compare prices, unlock exclusive deals, and travel smarter with TripBargain—trusted by millions across India.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
            <a href="https://play.google.com/store/apps/TripBargain" target="_blank" rel="noopener noreferrer">
              <img src={googlePlay} alt="Google Play" className="h-12 cursor-pointer" />
            </a>
            <a href="https://www.apple.com/app-store/TripBargain" target="_blank" rel="noopener noreferrer">
              <img src={appStore} alt="App Store" className="h-12 cursor-pointer" />
            </a>
          </div>

          {/* Download count */}
          <p className="text-gray-600 text-sm flex items-center gap-1">
            <CheckCircleIcon style={{ color: '#FFA726', fontSize: 18 }} />
            <strong className="text-black font-semibold">1 Million+</strong> Worldwide Downloads
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 relative ">
          <img src={heroImage} alt="App Interface" className="mx-auto max-w-xs lg:max-w-md rounded-4xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
