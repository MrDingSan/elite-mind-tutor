"use client";

import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    content: "We saw results in just 6 weeks — and our child loved the journey. The personalized attention and expert guidance made all the difference in her IB Physics journey.",
    author: "Sarah Chen",
    role: "Parent of IB Student at UWC",
    initials: "SC",
    rating: 5,
    result: "Achieved Grade 7 in IB Physics"
  },
  {
    content: "The transformation in my son's approach to learning has been remarkable. His confidence has grown tremendously, and he's now achieving grades we never thought possible.",
    author: "Michael Tan",
    role: "Parent of IGCSE Student at Dulwich",
    initials: "MT",
    rating: 5,
    result: "Improved from Grade C to A*"
  },
  {
    content: "What sets Elite Mind Tutor apart is their deep understanding of the IB curriculum and their ability to make complex concepts accessible. My daughter's grades improved from a 4 to a 6 in just 3 months!",
    author: "James Wong",
    role: "Parent of IB Student at SAS",
    initials: "JW",
    rating: 5,
    result: "Achieved Grade 6 in IB Mathematics"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-4xl">
            Real Stories, Real Results
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Don't just take our word for it - hear from our satisfied students and parents
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col justify-between bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-x-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#5A4BFF] to-[#4A3BEF] flex items-center justify-center">
                    <span className="text-lg font-semibold text-white">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.author}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                <p className="text-sm font-medium text-[#5A4BFF]">{testimonial.result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 