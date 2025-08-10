import React from 'react';

const Societies = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#FF6FD8] via-[#6A11CB] to-[#00C9A7] text-transparent bg-clip-text">
                        Societies
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12">
                        Active student communities fostering learning and innovation
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Technical Society</h3>
                            <p className="text-gray-300">Student-led technical initiatives, workshops, and coding competitions</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">AI/ML Club</h3>
                            <p className="text-gray-300">Specialized group focusing on artificial intelligence and machine learning projects</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Robotics Society</h3>
                            <p className="text-gray-300">Building and programming robots for competitions and real-world applications</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Coding Club</h3>
                            <p className="text-gray-300">Regular programming contests, hackathons, and coding bootcamps</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Research Society</h3>
                            <p className="text-gray-300">Promoting research culture among students through collaborative projects</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Innovation Hub</h3>
                            <p className="text-gray-300">Incubating startup ideas and fostering entrepreneurial mindset</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Societies;