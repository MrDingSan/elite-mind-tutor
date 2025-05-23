import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">Get in touch with us for any inquiries or to schedule a tutoring session.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md">Submit</button>
        </form>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Number</h2>
        <p>+65 85159132</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Operating Hours</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </section>
    </div>
  );
} 