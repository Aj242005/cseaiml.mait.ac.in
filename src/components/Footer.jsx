import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white w-full">
            <div className="bg-red-500 py-1"></div>
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg font-bold mb-4">About</h3>
                        <p className="text-gray-400 text-sm sm:text-base">
                            Department of CSE (AI &amp; ML), Maharaja Agrasen Institute of Technology.
                        </p>
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/academics"
                                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                >
                                    Academics
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/admissions"
                                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                >
                                    Admissions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact-us"
                                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg font-bold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/quick-links"
                                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                >
                                    Portals
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/facilities"
                                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                >
                                    Facilities
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/societies"
                                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                                >
                                    Societies
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            <a
                                className="text-gray-400 hover:text-white transition-colors"
                                href="#"
                                aria-label="Facebook"
                            >
                                <svg
                                    className="feather feather-facebook"
                                    fill="none"
                                    height="20"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a
                                className="text-gray-400 hover:text-white transition-colors"
                                href="#"
                                aria-label="Twitter"
                            >
                                <svg
                                    className="feather feather-twitter"
                                    fill="none"
                                    height="20"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                            <a
                                className="text-gray-400 hover:text-white transition-colors"
                                href="#"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    className="feather feather-linkedin"
                                    fill="none"
                                    height="20"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect height="12" width="4" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 sm:mt-12 border-t border-gray-800 pt-6 sm:pt-8 text-center">
                    <p className="text-gray-400 text-sm sm:text-base">
                        © 2025 CSE-AIML, MAIT. All Rights Reserved.
                    </p>
                    <p className="text-xs sm:text-lg text-amber-200 mt-2 cursor-pointer ">
                        <a href='https://www.linkedin.com/in/akshitjain24/' target='_blank'>
                            Designed and Made by Akshit Jain
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;