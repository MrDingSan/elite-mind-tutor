"use client";

import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Dr. Ling's teaching methods are exceptional. His ability to break down complex mathematical concepts into understandable parts has been invaluable for my daughter's IB Math HL preparation. She went from a predicted 5 to achieving a 7 in her final exams.",
    author: "Mrs. Tan",
    role: "Parent of Grade 12 UWCSEA Student",
    result: "Achieved Grade 7 in IB Math HL"
  },
  {
    quote: "Dr. Wei Ming's approach to physics is outstanding. His clear explanations and practical examples helped me understand complex concepts easily. I improved from a 4 to a 6 in IB Physics HL.",
    author: "David Lee",
    role: "Grade 12 Student at Singapore American School",
    result: "Achieved Grade 6 in IB Physics HL"
  },
  {
    quote: "The personalized attention and structured approach to learning made all the difference. Dr. Ling's expertise in both IB and IGCSE mathematics helped me improve from a Grade C to an A* in my IGCSE exams.",
    author: "Sarah Lim",
    role: "Grade 11 Student at Dulwich College Singapore",
    result: "Achieved A* in IGCSE Mathematics"
  },
  {
    quote: "Dr. Mei Lin's chemistry tutoring was transformative. Her detailed explanations and focus on practical applications helped me excel in my IB Chemistry exams. I'm now studying Chemical Engineering at NUS.",
    author: "Rachel Ng",
    role: "Former IB Student at Overseas Family School",
    result: "Accepted to NUS Chemical Engineering"
  },
  {
    quote: "Dr. Ling's teaching goes beyond just exam preparation. He instills a deep understanding of mathematical concepts that has helped me excel in my university studies at NUS. His mentorship has been invaluable.",
    author: "Michael Wong",
    role: "First Year Student at National University of Singapore",
    result: "Top 10% in NUS Mathematics Program"
  },
  {
    quote: "Dr. Wei Ming's physics tutoring was crucial for my success. His ability to explain complex topics in simple terms and his extensive practice materials helped me achieve a 7 in IB Physics SL.",
    author: "Emma Chen",
    role: "Grade 12 Student at Canadian International School",
    result: "Achieved Grade 7 in IB Physics SL"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + (isMobile ? 1 : 2)) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + (isMobile ? 1 : 2)) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - (isMobile ? 1 : 2) + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Student Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from our students and parents about their experience with Elite Mind Tutor
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`${isMobile ? 'w-full' : 'w-1/2'} flex-shrink-0 px-2 sm:px-4`}
                >
                  <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 h-full">
                    <FaQuoteLeft className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 mb-3 sm:mb-4" />
                    <blockquote className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 line-clamp-4 sm:line-clamp-none">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-gray-200 pt-3 sm:pt-4">
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</div>
                      <div className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</div>
                      <div className="text-indigo-600 font-medium mt-1 text-xs sm:text-sm">{testimonial.result}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-50 focus:outline-none"
          >
            <FaChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-50 focus:outline-none"
          >
            <FaChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / (isMobile ? 1 : 2)) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * (isMobile ? 1 : 2))}
                className={`w-2 h-2 rounded-full ${
                  index === Math.floor(currentIndex / (isMobile ? 1 : 2)) ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 