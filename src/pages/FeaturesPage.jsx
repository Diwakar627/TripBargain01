import React from 'react';

const FeaturesPage = () => (
  <main className="max-w-6xl mx-auto py-20 px-6 text-gray-800">
    {/* Header Section */}
    <section className="text-center mb-16">
      <h1 className="text-5xl font-extrabold text-orange-500 mb-4">Explore Our Features</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        TripBargain is built to make your travel seamless—from fast booking to secure payments and real-time support.
      </p>
    </section>

    {/* Feature Grid */}
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
      {[
        {
          icon: '⚡',
          title: 'Quick Booking',
          desc: 'Book cabs, hotels, and experiences in seconds through our simple and fast interface.',
        },
        {
          icon: '💬',
          title: '24/7 Customer Support',
          desc: 'Get assistance whenever you need with our dedicated support team available round the clock.',
        },
        {
          icon: '🔒',
          title: 'Secure Payments',
          desc: 'All transactions are encrypted and protected with industry-grade security protocols.',
        },
        {
          icon: '📍',
          title: 'Location-Based Deals',
          desc: 'Get real-time suggestions and deals based on your current or upcoming location.',
        },
        {
          icon: '📱',
          title: 'Mobile App Access',
          desc: 'Enjoy full functionality on-the-go using our fast and intuitive Android & iOS apps.',
        },
        {
          icon: '💰',
          title: 'Exclusive Discounts',
          desc: 'Unlock app-only coupons, daily travel offers, and bundle deals on every booking.',
        },
      ].map((feature, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center p-8 flex flex-col items-center"
        >
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h2>
          <p className="text-gray-600">{feature.desc}</p>
        </div>
      ))}
    </section>

    {/* CTA Image Section */}
    <section className="text-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-6">All-in-One Travel Companion</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        From booking to arrival, TripBargain ensures you get the best prices, verified services, and full transparency
        at every step.
      </p>
    
    </section>
  </main>
);

export default FeaturesPage;
