import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0F0C29] via-[#0F0C29] to-[#1C1A3B] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logo and navigation columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and social icons */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-6">TrakLinks.</h2>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1E1B4B] flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1E1B4B] flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#1E1B4B] flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Product column */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Case studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Culture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support column */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Getting started
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Help center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Server status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Report a bug
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Chat support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact us column */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-medium mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">traklinks@gmail.com</li>
              <li className="text-gray-300 text-sm">(414) 687 - 5892</li>
              <li className="text-gray-300 text-sm">Islamabad, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and links */}
        <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © 2025 TrakLinks <span className="mx-1">|</span> All
            Rights Reserved
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              Terms and Conditions
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
