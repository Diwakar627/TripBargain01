import React from 'react';

const BlogPage = () => (
  <main className="max-w-6xl mx-auto py-20 px-6 text-gray-800">
    {/* Page Header */}
    <section className="mb-16 text-center">
      <h1 className="text-5xl font-extrabold text-orange-500 mb-4">Our Blog</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Stay updated with the latest travel trends, tips, and TripBargain feature updates.
      </p>
    </section>

    {/* Featured Blog */}
    <section className="mb-20">
      <div className="bg-white rounded-xl shadow-xl p-8 md:flex gap-8 items-center hover:shadow-2xl transition">
       
        <div className="mt-6 md:mt-0 md:w-1/2">
          <h2 className="text-3xl font-bold mb-2 text-orange-600">How to Save Big on Your Next Trip</h2>
          <p className="text-gray-600 mb-3">
            From smart booking hacks to using our exclusive discount codes, here's everything you need to know to travel smarter in 2025.
          </p>
          <div className="flex justify-between text-sm text-gray-400">
            <span>By TripBargain Team</span>
            <span>Posted on July 1, 2025</span>
          </div>
        </div>
      </div>
    </section>

    {/* Blog Grid */}
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Reusable blog card */}
      {[
        {
          title: 'Top Destinations for 2025',
          desc: 'Explore the hottest travel destinations this year and how TripBargain can help you get there for less.',
          date: 'June 20, 2025',
          tag: 'Destinations',
        },
        {
          title: 'App Feature Highlights',
          desc: 'A deep dive into the latest features of the TripBargain app and how they benefit you.',
          date: 'June 10, 2025',
          tag: 'App Updates',
        },
        {
          title: 'Solo Travel Tips for Beginners',
          desc: 'Everything you need to know before you take your first solo trip – safety, planning, and more.',
          date: 'May 25, 2025',
          tag: 'Travel Tips',
        },
        {
          title: 'Hidden Gems Across India',
          desc: 'Uncover the lesser-known but beautiful travel spots in India that are worth visiting.',
          date: 'May 10, 2025',
          tag: 'Hidden Gems',
        },
        {
          title: 'Booking Hotels at the Best Price',
          desc: 'How TripBargain’s price comparison tool saves you thousands on hotel bookings.',
          date: 'April 30, 2025',
          tag: 'Savings',
        },
        {
          title: 'What Makes a Trip Memorable',
          desc: 'Our community shares their most unforgettable travel moments and lessons learned.',
          date: 'April 15, 2025',
          tag: 'Stories',
        },
      ].map((post, idx) => (
        <article
          key={idx}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between"
        >
          <div>
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium rounded-full px-3 py-1 mb-2">
              {post.tag}
            </span>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.desc}</p>
          </div>
          <span className="text-xs text-gray-400">{post.date}</span>
        </article>
      ))}
    </section>
  </main>
);

export default BlogPage;
