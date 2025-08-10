import React from 'react';

const Facilities = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#FF6FD8] via-[#6A11CB] to-[#00C9A7] text-transparent bg-clip-text">
                        Facilities
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12">
                        State-of-the-art infrastructure and modern learning environments
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Computer Labs</h3>
                            <p className="text-gray-300">Modern computer laboratories equipped with latest hardware and software for practical learning</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">AI/ML Lab</h3>
                            <p className="text-gray-300">Specialized laboratory for artificial intelligence and machine learning research and projects</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Library</h3>
                            <p className="text-gray-300">Extensive digital and physical library with access to latest research papers and journals</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Research Centers</h3>
                            <p className="text-gray-300">Dedicated research facilities for innovative projects and collaborative research</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Auditorium</h3>
                            <p className="text-gray-300">Modern auditorium for seminars, conferences, and academic events</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Sports Complex</h3>
                            <p className="text-gray-300">Complete sports facilities for physical fitness and recreational activities</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;