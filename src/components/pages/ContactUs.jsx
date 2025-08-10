import React from 'react';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#FF6FD8] via-[#6A11CB] to-[#00C9A7] text-transparent bg-clip-text">
                        Contact Us
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12">
                        Get in touch with our department for any queries or information
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Department Office</h3>
                                <p className="text-gray-300 mb-2">Computer Science & Engineering Department</p>
                                <p className="text-gray-300 mb-2">Maharaja Agrasen Institute of Technology</p>
                                <p className="text-gray-300 mb-2">PSP Area, Sector 22, Rohini, Delhi - 110085</p>
                            </div>

                            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Contact Details</h3>
                                <p className="text-gray-300 mb-2">Phone: +91-11-27555000</p>
                                <p className="text-gray-300 mb-2">Email: cse@mait.ac.in</p>
                                <p className="text-gray-300 mb-2">Website: www.mait.ac.in</p>
                            </div>

                            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                                <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Office Hours</h3>
                                <p className="text-gray-300 mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                                <p className="text-gray-300 mb-2">Saturday: 9:00 AM - 1:00 PM</p>
                                <p className="text-gray-300">Sunday: Closed</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                            <h3 className="text-2xl font-semibold mb-6 text-[#00B4D8]">Send us a Message</h3>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent text-white"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent text-white"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent text-white"
                                        placeholder="Subject"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                                    <textarea
                                        rows={6}
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent text-white resize-none"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#FF6FD8] via-[#6A11CB] to-[#00C9A7] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;