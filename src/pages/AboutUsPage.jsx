import React from 'react';

const AboutUsPage = () => (
  <main className="max-w-6xl mx-auto py-20 px-6 text-gray-800">
    {/* Header Section */}
    <section className="mb-16 text-center">
      <h1 className="text-5xl font-extrabold text-orange-500 mb-6">About Us</h1>
      <p className="text-lg max-w-3xl mx-auto text-gray-600">
        TripBargain is your trusted companion for discovering the best travel deals across India. From cabs and hotels
        to unforgettable local experiences, we help millions travel smarter and safer every day.
      </p>
    </section>

    {/* Image + Intro */}
    <section className="flex flex-col md:flex-row items-center gap-12 mb-20">
      <img
        src="/src/assets/about-img.png"
        alt="TripBargain travel service"
        className="rounded-2xl shadow-xl w-full md:max-w-md"
      />
      <div className="text-lg space-y-5">
        <p>
          <strong className="text-gray-900">TripBargain</strong> was founded with a single mission — to make travel
          accessible, reliable, and affordable for everyone. Whether you're planning a weekend getaway or a long
          vacation, we ensure every journey is hassle-free and economical.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>✔ Guaranteed lowest prices on cabs, hotels, and experiences</li>
          <li>✔ Real-time comparison from top travel providers</li>
          <li>✔ 24/7 customer service and verified drivers/hosts</li>
          <li>✔ User-friendly interface with secure payment options</li>
        </ul>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="grid md:grid-cols-2 gap-10 mb-20">
      <div className="bg-orange-50 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          To empower travelers with transparent pricing, personalized experiences, and exceptional service—making every
          journey enjoyable and stress-free.
        </p>
      </div>
      <div className="bg-orange-50 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          To be India’s most trusted and loved travel platform by innovating how people explore, connect, and move.
        </p>
      </div>
    </section>

    {/* Company Stats */}
    <section className="mb-20 text-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-10">Our Impact in Numbers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-orange-600 font-semibold text-xl">
        <div>
          <p className="text-4xl font-bold text-gray-900">5M+</p>
          <p>Happy Travelers</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-gray-900">150+</p>
          <p>Cities Covered</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-gray-900">20K+</p>
          <p>Verified Partners</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-gray-900">24/7</p>
          <p>Support</p>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Our Core Values</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2 text-orange-600">Trust</h3>
          <p>We are committed to transparency and accountability in everything we do.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2 text-orange-600">Innovation</h3>
          <p>We continuously improve our services and technologies to serve you better.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2 text-orange-600">Customer First</h3>
          <p>Your satisfaction is our top priority, always and forever.</p>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-gray-50 py-16 px-6 rounded-xl shadow-inner">
      <h2 className="text-3xl font-bold text-orange-500 mb-10 text-center">What Our Users Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="italic text-gray-700">
            “TripBargain helped me find the cheapest cab for my trip to Goa! The driver was professional and everything
            went smoothly.”
          </p>
          <p className="mt-4 font-semibold text-orange-600">— Neha Sharma, Delhi</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="italic text-gray-700">
            “Their hotel deals saved me a lot. I booked a premium room at half the price I saw elsewhere.”
          </p>
          <p className="mt-4 font-semibold text-orange-600">— Rajeev Mehta, Mumbai</p>
        </div>
      </div>
    </section>
  </main>
);

export default AboutUsPage;
