import React from 'react';

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What subjects do you offer tutoring for?</h2>
        <p>We offer tutoring for a wide range of subjects, including IGCSE and IB curriculum subjects.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">How do I schedule a tutoring session?</h2>
        <p>You can schedule a tutoring session by contacting us through our website or by phone.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What are your rates?</h2>
        <p>Our rates vary depending on the subject and level. Please contact us for detailed pricing information.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Do you offer online tutoring?</h2>
        <p>Yes, we offer both online and in-person tutoring sessions.</p>
      </section>
    </div>
  );
} 