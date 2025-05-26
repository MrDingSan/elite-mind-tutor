"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaGraduationCap, FaChalkboardTeacher, FaBook, FaClock, FaLaptop } from 'react-icons/fa';
import Script from 'next/script';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    category: "About Our Service",
    icon: <FaGraduationCap className="h-6 w-6" />,
    question: "What makes Elite Mind Tutor different from other tuition services?",
    answer: "Elite Mind Tutor stands out through our commitment to excellence in every aspect of our service:\n\n1) Personalized Matching System: We carefully match students with tutors based on learning style, personality, and academic goals, ensuring the perfect fit for optimal learning.\n\n2) Exceptional Tutor Quality: Our tutors are all experienced professionals with strong academic backgrounds from top universities and proven teaching credentials.\n\n3) Proven Track Record: We maintain detailed records of student progress and have consistently helped students achieve significant grade improvements, with many achieving top scores in their respective subjects.\n\n4) Comprehensive Support: Beyond just tutoring, we provide study materials, progress tracking, and regular feedback to ensure continuous improvement."
  },
  {
    category: "About Our Service",
    icon: <FaGraduationCap className="h-6 w-6" />,
    question: "How are your tutors selected and vetted?",
    answer: "Our tutor selection process is one of the most rigorous in the industry:\n\n1) Academic Excellence: All tutors must have a minimum of a Bachelor's degree from a top university, with many holding Master's or PhD qualifications.\n\n2) Teaching Experience: Minimum 2 years of teaching experience, with preference given to those with experience in international schools or top institutions.\n\n3) Subject Expertise: Deep knowledge in their subject areas, often with additional certifications or specializations.\n\n4) Communication Skills: Excellent ability to explain complex concepts clearly and engage students effectively.\n\n5) Background Checks: Comprehensive background verification, including criminal record checks and reference verifications.\n\n6) Continuous Development: Regular training and performance reviews to ensure teaching quality remains at the highest standard."
  },
  {
    category: "Tutoring Process",
    icon: <FaChalkboardTeacher className="h-6 w-6" />,
    question: "Do you offer trial lessons or assessments?",
    answer: "Yes, we offer a comprehensive initial assessment process designed to ensure the best possible match:\n\n1) Academic Assessment: A detailed evaluation of the student's current academic level, identifying strengths and areas for improvement.\n\n2) Learning Style Analysis: Understanding how the student learns best to match them with the most suitable tutor.\n\n3) Goal Setting: Discussion of academic goals and expectations to create a targeted learning plan.\n\n4) Trial Session: A trial tutoring session to ensure compatibility between student and tutor.\n\n5) Personalized Plan: Creation of a customized learning roadmap based on the assessment results.\n\nThis process helps us create the most effective learning environment for each student."
  },
  {
    category: "Tutoring Process",
    icon: <FaChalkboardTeacher className="h-6 w-6" />,
    question: "Can tutoring be done at our home or only online?",
    answer: "We offer flexible tutoring options to accommodate your preferences and schedule:\n\n1) In-Person Tutoring: Available at your home throughout Singapore, with priority areas including:\n   - Orchard and Tanglin\n   - Bukit Timah\n   - Holland Village\n   - Sentosa and surrounding regions\n\n2) Online Tutoring: Through our advanced virtual classroom platform with features like:\n   - Interactive whiteboard\n   - Real-time document sharing\n   - Screen recording for review\n   - Secure video conferencing\n\n3) Hybrid Arrangements: Combination of in-person and online sessions for maximum flexibility.\n\nOur tutors are available throughout Singapore, and we can accommodate most locations with advance notice."
  },
  {
    category: "Curriculum",
    icon: <FaBook className="h-6 w-6" />,
    question: "What curricula do you support?",
    answer: "We specialize in international curricula with a focus on academic excellence:\n\n1) International Baccalaureate (IB):\n   - IB Diploma Programme (DP)\n   - IB Middle Years Programme (MYP)\n   - All subjects at both Standard and Higher Level\n\n2) Cambridge IGCSE:\n   - All core and elective subjects\n   - Both Extended and Core curriculum options\n\n3) A-Levels:\n   - All major subjects\n   - Both AS and A2 levels\n\n4) Other International Curricula:\n   - AP (Advanced Placement)\n   - SAT/ACT preparation\n   - Other international school curricula\n\nOur tutors are experts in their respective curricula and stay updated with the latest syllabus changes and examination requirements."
  },
  {
    category: "Curriculum",
    icon: <FaBook className="h-6 w-6" />,
    question: "What subjects do you offer tutoring for?",
    answer: "We offer comprehensive tutoring across all major academic disciplines:\n\n1) Mathematics:\n   - All levels including HL/SL\n   - Additional Mathematics\n   - Further Mathematics\n\n2) Sciences:\n   - Physics (All levels)\n   - Chemistry (All levels)\n   - Biology (All levels)\n   - Environmental Science\n\n3) Languages:\n   - English (Literature and Language)\n   - Chinese (All levels)\n   - Other languages available\n\n4) Humanities:\n   - History\n   - Geography\n   - Economics\n   - Business Studies\n\n5) Additional Subjects:\n   - Computer Science\n   - Psychology\n   - Art and Design\n\nEach subject is taught by specialists with deep expertise and proven track records in their respective fields."
  },
  {
    category: "Scheduling and Rates",
    icon: <FaClock className="h-6 w-6" />,
    question: "How do I schedule a tutoring session?",
    answer: "Scheduling with Elite Mind Tutor is simple and flexible:\n\n1) Initial Contact:\n   - Through our website\n   - Phone call\n   - Email\n   - WhatsApp\n\n2) Consultation:\n   - Discuss your requirements with our education consultants\n   - Share your academic goals and preferences\n   - Review available time slots\n\n3) Schedule Selection:\n   - Choose from available slots 7 days a week\n   - Morning, afternoon, or evening sessions\n   - Regular or flexible scheduling options\n\n4) Location Choice:\n   - Home visits\n   - Online sessions\n   - Our learning center\n\nWe'll match you with the most suitable tutor and confirm the schedule within 24 hours of your initial contact."
  },
  {
    category: "Scheduling and Rates",
    icon: <FaClock className="h-6 w-6" />,
    question: "What are your rates?",
    answer: "Our rates reflect our commitment to providing the highest quality education:\n\n1) Individual Sessions:\n   - Rates vary by subject level and tutor experience\n   - Competitive pricing for premium service\n   - Transparent pricing with no hidden costs\n\n2) Package Options:\n   - Discounted rates for regular sessions\n   - Flexible package durations\n   - Customizable schedules\n\n3) Group Sessions:\n   - Special rates for small group sessions\n   - Maximum 4 students per group\n   - Similar ability levels grouped together\n\n4) Payment Options:\n   - Multiple payment methods accepted\n   - Flexible payment schedules\n   - Package payment discounts\n\nContact us for a detailed quote tailored to your specific needs and requirements."
  },
  {
    category: "Technology and Support",
    icon: <FaLaptop className="h-6 w-6" />,
    question: "Do you offer online tutoring?",
    answer: "Yes, we provide comprehensive online tutoring through our state-of-the-art virtual classroom platform:\n\n1) Advanced Features:\n   - Interactive whiteboard for real-time problem solving\n   - Document sharing and annotation tools\n   - Screen recording for session review\n   - Secure video conferencing\n   - Digital resource library\n\n2) Learning Tools:\n   - Virtual manipulatives for mathematics\n   - Interactive simulations for sciences\n   - Digital flashcards and study materials\n   - Progress tracking dashboard\n\n3) Technical Support:\n   - 24/7 platform assistance\n   - Pre-session technical check\n   - Troubleshooting support\n\nOur online sessions are as effective as in-person tutoring, with the added convenience of learning from anywhere in the world."
  },
  {
    category: "Technology and Support",
    icon: <FaLaptop className="h-6 w-6" />,
    question: "What technology do I need for online tutoring?",
    answer: "To ensure the best online tutoring experience, you'll need:\n\n1) Hardware Requirements:\n   - A computer or tablet with a webcam and microphone\n   - Stable internet connection (minimum 5Mbps)\n   - Headphones or speakers for clear audio\n\n2) Software Setup:\n   - Latest version of Chrome, Firefox, or Safari\n   - Access to our virtual classroom platform\n   - PDF reader for study materials\n\n3) Learning Environment:\n   - Quiet, well-lit space for the session\n   - Comfortable seating and desk setup\n   - Basic stationery for note-taking\n\nWe provide comprehensive technical support and will guide you through the setup process to ensure everything works perfectly."
  }
];

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleQuestion = (question: string) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(question)) {
      newOpenQuestions.delete(question);
    } else {
      newOpenQuestions.add(question);
    }
    setOpenQuestions(newOpenQuestions);
  };

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white text-center mb-6">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-indigo-100 text-center max-w-3xl mx-auto">
            Find answers to common questions about our premium tutoring services. We're here to help you make the best decision for your child's education.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {Array.from(new Set(faqData.map(item => item.category))).map(category => (
            <div key={category} className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full px-8 py-6 text-left bg-gradient-to-r from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    {faqData.find(item => item.category === category)?.icon}
                    <h2 className="text-2xl font-semibold text-gray-900">{category}</h2>
                  </div>
                  {openCategory === category ? (
                    <FaChevronUp className="h-6 w-6 text-indigo-600 transform transition-transform duration-300" />
                  ) : (
                    <FaChevronDown className="h-6 w-6 text-indigo-600 transform transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              {openCategory === category && (
                <div className="px-8 py-6 space-y-6">
                  {faqData
                    .filter(item => item.category === category)
                    .map((item, index) => (
                      <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                        <button
                          onClick={() => toggleQuestion(item.question)}
                          className="w-full text-left group"
                        >
                          <div className="flex justify-between items-center">
                            <h3 className="text-xl font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                              {item.question}
                            </h3>
                            {openQuestions.has(item.question) ? (
                              <FaChevronUp className="h-5 w-5 text-indigo-600 transform transition-transform duration-300" />
                            ) : (
                              <FaChevronDown className="h-5 w-5 text-indigo-600 transform transition-transform duration-300" />
                            )}
                          </div>
                        </button>
                        {openQuestions.has(item.question) && (
                          <div className="mt-4 text-gray-600 space-y-4">
                            {item.answer.split('\n\n').map((paragraph, i) => (
                              <p key={i} className="leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of education experts is here to help. Contact us for personalized assistance and to discuss your specific requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
} 