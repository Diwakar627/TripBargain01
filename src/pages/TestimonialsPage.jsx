import React from 'react';

const testimonials = [
  {
    name: 'Priya S.',
    text: 'TripBargain helped me save so much on my last trip! Highly recommended.',
    avatar: 'https://i.pravatar.cc/100?img=5',
    rating: 5,
  },
  {
    name: 'Rahul M.',
    text: 'Easy to use and the best deals in town. Will use again!',
    avatar: 'https://i.pravatar.cc/100?img=12',
    rating: 4,
  },
  {
    name: 'Anjali T.',
    text: 'Great customer support and seamless booking experience.',
    avatar: 'https://i.pravatar.cc/100?img=16',
    rating: 5,
  },
  {
    name: 'Vikram P.',
    text: 'I love the price comparison feature!',
    avatar: 'https://i.pravatar.cc/100?img=8',
    rating: 4,
  },
];

const StarRating = ({ count }) => (
  <div className="text-yellow-400 mb-2">
    {'★'.repeat(count)}
    {'☆'.repeat(5 - count)}
  </div>
);

const TestimonialsPage = () => (
  <main className="max-w-6xl mx-auto py-20 px-6 text-gray-800">
    <h1 className="text-5xl font-extrabold mb-12 text-center text-orange-500">What Our Users Say</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-lg">{testimonial.name}</p>
              <StarRating count={testimonial.rating} />
            </div>
          </div>
          <p className="text-gray-700 text-base italic">"{testimonial.text}"</p>
        </div>
      ))}
    </div>
  </main>
);

export default TestimonialsPage;
