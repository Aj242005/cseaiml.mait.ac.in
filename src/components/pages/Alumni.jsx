import React from 'react';

const Alumni = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#FF6FD8] via-[#6A11CB] to-[#00C9A7] text-transparent bg-clip-text">
                        Alumni
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12">
                        Our proud graduates making impact across the globe
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Industry Leaders</h3>
                            <p className="text-gray-300">Alumni leading major tech companies and startups worldwide</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Researchers</h3>
                            <p className="text-gray-300">PhDs and researchers contributing to cutting-edge technology development</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Entrepreneurs</h3>
                            <p className="text-gray-300">Successful entrepreneurs building innovative tech solutions</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Alumni Network</h3>
                            <p className="text-gray-300">Strong global network supporting current students and fellow alumni</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Success Stories</h3>
                            <p className="text-gray-300">Inspiring journeys from classroom to corporate boardrooms</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Mentorship</h3>
                            <p className="text-gray-300">Alumni actively mentoring and guiding current students</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alumni;