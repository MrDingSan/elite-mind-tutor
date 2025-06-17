"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="flex items-center">
                  {!logoError ? (
                    <Image
                      src="/images/logo/logo-without-words.png"
                      alt="EliteMind Tutor Logo"
                      width={40}
                      height={40}
                      className="h-10 w-10"
                      priority
                      onError={() => setLogoError(true)}
                    />
                  ) : (
                    <div className="h-10 w-10 bg-navy rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">E</span>
                    </div>
                  )}
                  <span className="ml-2 text-xl font-semibold text-navy">EliteMind Tutor</span>
                </div>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/about"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-navy hover:text-navy"
              >
                About
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-navy hover:text-navy"
              >
                Services
              </Link>
              <Link
                href="/tutors"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-navy hover:text-navy"
              >
                Tutors
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-navy hover:text-navy"
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-navy hover:text-navy"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-navy hover:text-navy"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="/request-tutor"
              className="rounded-md bg-navy px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-navy-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              Request a Tutor
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            <Link
              href="/about"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-navy hover:bg-gray-50 hover:text-navy"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-navy hover:bg-gray-50 hover:text-navy"
            >
              Services
            </Link>
            <Link
              href="/tutors"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-navy hover:bg-gray-50 hover:text-navy"
            >
              Tutors
            </Link>
            <Link
              href="/blog"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-navy hover:bg-gray-50 hover:text-navy"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-navy hover:bg-gray-50 hover:text-navy"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-navy hover:bg-gray-50 hover:text-navy"
            >
              Contact
            </Link>
          </div>
          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="flex items-center px-4">
              <Link
                href="/request-tutor"
                className="block w-full rounded-md bg-navy px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-navy-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                Request a Tutor
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 