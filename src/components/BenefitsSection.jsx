import React, { useEffect, useState } from 'react';
import benefit1 from '../assets/benefit-1.png';
import benefit2 from '../assets/benefit-2.png';
import benefit3 from '../assets/benefit-3.png';
import benefit4 from '../assets/benefit-4.png';
import feature3 from '../assets/feature-3.png';
import qrIos from '../assets/qr-ios.png';
import qrAndroid from '../assets/qr-android.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const benefits = [
  {
    icon: benefit1,
    title: 'Fare Estimates',
    description: 'Know your fare in advance before booking the ride.'
  },
  {
    icon: benefit2,
    title: 'Secure Payments',
    description: 'Pay safely with credit cards, UPI, or wallets.'
  },
  {
    icon: benefit3,
    title: 'SOS Button',
    description: 'Emergency SOS for safety and assistance.'
  },
  {
    icon: benefit4,
    title: 'Ride History',
    description: 'View all your previous trips and invoices.'
  }
];

const BenefitsSection = () => {
  const [apiBenefits, setApiBenefits] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Example API endpoint, replace with your real one
    fetch('https://api.example.com/benefits')
      .then(res => res.json())
      .then(data => setApiBenefits(data))
      .catch(() => setApiBenefits([]));
    // Animation trigger
    setTimeout(() => setVisible(true), 200);
  }, []);

  // Fallback to static if API fails or is empty
  const displayBenefits = apiBenefits.length > 0 ? apiBenefits : benefits;

  return (
    <section className={`bg-gray-100 py-16 px-4 sm:px-6 section-fade${visible ? ' visible' : ''}`}
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-orange-500 mb-2">Benefits</p>
        <h2 id="benefits-heading" className="text-3xl font-bold mb-8 sm:mb-10">
          Why Choose <span className="text-orange-500">Our App</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10">
          {displayBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center"
            >
              <span className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-50 mb-4">
                <img
                  src={benefit.iconUrl || benefit.icon}
                  alt={benefit.title}
                  className={`h-8 w-8 object-contain img-reveal${visible ? ' visible' : ''}`}
                />
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-1">
                <CheckCircleIcon style={{ color: '#FFA726', fontSize: 22 }} />
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Download APK Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
          <a
                            href="/app.zip"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition text-base sm:text-lg"
            download
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" /></svg>
            Download APK
          </a>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <img src={qrAndroid} alt="QR Android" className="w-20 h-20 object-contain mb-1" />
              <span className="text-xs text-gray-500">Android QR</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={qrIos} alt="QR iOS" className="w-20 h-20 object-contain mb-1" />
              <span className="text-xs text-gray-500">iOS QR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
