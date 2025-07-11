import React from 'react';
import qrIos from '../assets/qr-ios.png';
import qrAndroid from '../assets/qr-android.png';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const DownloadSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Block: iOS Download */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Download for iOS</h3>
          <img src={qrIos} alt="iOS QR" className="h-32 w-32 mb-4" />
          <a
            href="https://apps.apple.com/in/app/tripbargain/id123456789"
            className="bg-black text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppleIcon style={{ fontSize: 24 }} />
            Get on App Store
          </a>
        </div>

        {/* Center: App Stats */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-orange-500 mb-2">1M+ Downloads</h3>
          <p className="text-gray-600 mb-2">Serving 150+ Indian Cities</p>
          <p className="text-gray-600">30,000+ Verified Drivers</p>
        </div>

        {/* Right Block: Android Download */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Download for Android</h3>
          <img src={qrAndroid} alt="Android QR" className="h-32 w-32 mb-4" />
          <a
            href="https://play.google.com/store/apps/details?id=com.tripbargain"
            className="bg-green-600 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AndroidIcon style={{ fontSize: 24 }} />
            Get on Play Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
