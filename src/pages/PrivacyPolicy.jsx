import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 text-gray-800">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">Privacy Policy</h1>

      <p className="mb-4 text-lg">
        At <span className="font-semibold text-orange-500">TripBargain</span>, we are committed to protecting your personal information and your right to privacy.
        This policy describes how we collect, use, and protect your data when you use our platform.
      </p>

      {/* Section: Information We Collect */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Personal details like name, email, and phone number.</li>
          <li>Location data when booking cabs or services.</li>
          <li>Payment information for completing transactions.</li>
          <li>App usage data to improve performance and user experience.</li>
        </ul>
      </section>

      {/* Section: How We Use Your Information */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To process bookings and transactions.</li>
          <li>To provide customer support and respond to inquiries.</li>
          <li>To send notifications, promotions, and updates.</li>
          <li>To improve our platform and personalize user experience.</li>
        </ul>
      </section>

      {/* Section: Data Sharing */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Data Sharing & Disclosure</h2>
        <p>
          We do not sell your personal data. We may share information with third parties only when necessary to provide our services (e.g., payment processors, ride partners), or as required by law.
        </p>
      </section>

      {/* Section: Data Security */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We use encryption and secure technologies to safeguard your data. However, no method of transmission over the Internet is 100% secure.
        </p>
      </section>

      {/* Section: Cookies */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Cookies & Tracking</h2>
        <p>
          We may use cookies and analytics tools to enhance functionality and measure site traffic. You can manage your cookie settings in your browser.
        </p>
      </section>

      {/* Section: Your Rights */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>You may access, correct, or delete your data at any time.</li>
          <li>You may opt out of promotional communications.</li>
          <li>Contact us to exercise your privacy rights.</li>
        </ul>
      </section>

      {/* Section: Contact Info */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <ul className="mt-2">
          <li>Email: <a href="mailto:support@tripbargain.com" className="text-orange-500 underline">support@tripbargain.com</a></li>
          <li> <a href="tel:+911234567890" className="text-orange-500 underline"> </a></li>
        </ul>
      </section>

      <p className="text-sm text-gray-500 mt-10">
        Last updated: July 3, 2025
      </p>
    </main>
  );
};

export default PrivacyPolicyPage;
