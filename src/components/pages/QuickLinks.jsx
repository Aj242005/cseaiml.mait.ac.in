import React from 'react';

const QuickLinks = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#FF6FD8] via-[#6A11CB] to-[#00C9A7] text-transparent bg-clip-text">
                        Quick Links
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12">
                        Easy access to important resources and portals
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#00B4D8] transition-colors cursor-pointer">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Student Portal</h3>
                            <p className="text-gray-300">Access grades, attendance, and academic resources</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#00B4D8] transition-colors cursor-pointer">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Library Online</h3>
                            <p className="text-gray-300">Digital library access and book reservations</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#00B4D8] transition-colors cursor-pointer">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Course Registration</h3>
                            <p className="text-gray-300">Register for courses and track academic progress</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#00B4D8] transition-colors cursor-pointer">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Placement Cell</h3>
                            <p className="text-gray-300">Job opportunities and placement assistance</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#00B4D8] transition-colors cursor-pointer">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Research Portal</h3>
                            <p className="text-gray-300">Research opportunities and project submissions</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#00B4D8] transition-colors cursor-pointer">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Faculty Directory</h3>
                            <p className="text-gray-300">Contact information and office hours of faculty members</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#00B4D8] transition-colors cursor-pointer">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Academic Calendar</h3>
                            <p className="text-gray-300">Important dates, exam schedules, and academic events</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#00B4D8] transition-colors cursor-pointer">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Fee Payment</h3>
                            <p className="text-gray-300">Online fee payment and transaction history</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#00B4D8] transition-colors cursor-pointer">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Grievance Portal</h3>
                            <p className="text-gray-300">Submit and track grievances and feedback</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;