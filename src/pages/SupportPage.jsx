import React from 'react';

const SupportPage = () => (
  <main className="max-w-5xl mx-auto py-20 px-6 text-gray-800">
    {/* Page Header */}
    <section className="text-center mb-12">
      <h1 className="text-5xl font-extrabold text-orange-500 mb-4">Support</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Need help? We’re here 24/7. Reach out through any of the methods below or check our FAQs for quick solutions.
      </p>
    </section>

    {/* Contact Options */}
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-2 text-orange-500">📧 Email Support</h2>
        <p className="text-gray-700 mb-2">Send us your queries and we’ll get back within 24 hours.</p>
        <a href="mailto:support@tripbargain.com" className="text-orange-600 font-semibold underline">
          support@tripbargain.com
        </a>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-2 text-orange-500">📞 Phone Support</h2>
        <p className="text-gray-700 mb-2">Talk to a live support executive anytime between 9AM to 9PM IST.</p>
        <a href="tel:+911234567890" className="text-orange-600 font-semibold underline">
          
        </a>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="bg-white rounded-xl shadow p-8 mb-16">
      <h3 className="text-3xl font-bold text-orange-500 mb-6">Frequently Asked Questions</h3>
      <div className="space-y-6 text-gray-700">
        <div>
          <p className="font-semibold text-gray-900">🔐 How do I reset my password?</p>
          <p>Go to the login screen, click on <strong>“Forgot Password”</strong>, and follow the email instructions.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">📲 How can I contact customer support?</p>
          <p>You can email us at <a href="mailto:support@tripbargain.com" className="text-orange-500 underline">support@tripbargain.com</a>  <a href="tel:+911234567890" className="text-orange-500 underline"> </a>.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">🧾 Where can I find my booking history?</p>
          <p>Log into your account and go to the <strong>“My Bookings”</strong> section to view all past and current bookings.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">💳 Can I cancel or modify my booking?</p>
          <p>Yes. Navigate to <strong>“My Bookings”</strong>, select your trip, and choose to cancel or modify based on the policy.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">📦 What is TripBargain’s refund policy?</p>
          <p>Refunds are processed within 5–7 business days depending on your payment method. Check cancellation terms before booking.</p>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="text-center">
      <h2 className="text-2xl font-bold text-orange-500 mb-2">Still need help?</h2>
      <p className="text-gray-600 mb-6">Reach out to our team anytime. We’re always happy to assist you!</p>
      <a
        href="mailto:support@tripbargain.com"
        className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-600 transition"
      >
        Contact Support
      </a>
    </section>
  </main>
);

export default SupportPage;
