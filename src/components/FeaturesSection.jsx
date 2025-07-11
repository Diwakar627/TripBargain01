import React from 'react';
import feature1 from '../assets/feature-1.png';
import feature2 from '../assets/feature-2.png';
import feature3 from '../assets/feature-3.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const features = [
  {
    icon: feature1,
    title: 'Quick Booking Process',
    description: 'Book your ride in seconds using our intuitive interface.'
  },
  {
    icon: feature2,
    title: 'Chat & Call Support',
    description: 'Easily communicate with drivers through chat or call.'
  },
  {
    icon: feature3,
    title: 'GPS Tracking',
    description: 'Track your taxi in real-time on the map.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-orange-500 mb-2">Features</p>
        <h2 className="text-3xl font-bold mb-10">
          Awesome <span className="text-orange-500">Features</span> You'll Love
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-all"
            >
              <span className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-50 mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-10 w-10 object-contain"
                />
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-1">
                <CheckCircleIcon style={{ color: '#FFA726', fontSize: 22 }} />
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
