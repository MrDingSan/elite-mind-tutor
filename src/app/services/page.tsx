import React from 'react';

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Service Offerings</h2>
        <ul className="list-disc pl-5">
          <li>IGCSE Curriculum Tutoring</li>
          <li>IB Curriculum Tutoring</li>
          <li>Personalized Learning Plans</li>
          <li>Online and In-Person Sessions</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Pricing Information</h2>
        <p>Our pricing is competitive and transparent. Please contact us for detailed pricing information.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
        <ol className="list-decimal pl-5">
          <li>Contact us to discuss your needs.</li>
          <li>We will match you with a qualified tutor.</li>
          <li>Schedule your first session and start learning!</li>
        </ol>
      </section>
    </div>
  );
} 