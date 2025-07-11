import React from 'react';

const HowItWorksPage = () => (
  <main className="max-w-6xl mx-auto py-20 px-6 text-gray-800">
    {/* Header */}
    <section className="text-center mb-16">
      <h1 className="text-5xl font-extrabold text-orange-500 mb-4">How It Works</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Getting started with TripBargain is simple. Just follow these easy steps to book your next ride, hotel, or activity with confidence.
      </p>
    </section>

    {/* Steps Section */}
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
      {/* Steps List */}
      <ol className="list-decimal list-inside space-y-6 text-lg text-gray-700">
        <li>
          <span className="font-bold text-orange-500">Download:</span> Get the TripBargain app from the Play Store or App Store.
        </li>
        <li>
          <span className="font-bold text-orange-500">Sign Up:</span> Create your account and set your travel preferences.
        </li>
        <li>
          <span className="font-bold text-orange-500">Compare:</span> Search and compare prices on cabs, hotels, and local activities.
        </li>
        <li>
          <span className="font-bold text-orange-500">Book:</span> Choose the best option and book instantly with secured payment.
        </li>
        <li>
          <span className="font-bold text-orange-500">Track:</span> Track rides in real-time and manage all bookings from the app.
        </li>
      </ol>

      {/* Image Demo */}
{/* Image Demo */}
<div className="flex justify-center md:justify-end">
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    style={{
      width: '100%',
      maxWidth: '280px',
      display: 'block',
      borderRadius: 20,
      border: '4px solid #FFA726'
    }}
  >
    <source src="/app-demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

    </section>

    {/* Final Call to Action */}
    <section className="text-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-4">Start Saving on Travel Today</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        Whether you're planning a weekend getaway or a business trip, TripBargain helps you get there smarter, safer, and for less.
      </p>
      
      <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-600 transition">
          <a
                          href="/app.zip"
          download 
        >
          Download the App
        </a>
       
      </button>
    </section>
  </main>
);

export default HowItWorksPage;
