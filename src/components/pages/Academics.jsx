import React from 'react';

const Academics = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#FF6FD8] via-[#6A11CB] to-[#00C9A7] text-transparent bg-clip-text">
                        Academics
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12">
                        Comprehensive academic programs in Computer Science and Engineering
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Undergraduate Program</h3>
                            <p className="text-gray-300">B.Tech in Computer Science and Engineering with specialization in AI & ML</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Postgraduate Program</h3>
                            <p className="text-gray-300">M.Tech in Computer Science and Engineering with advanced research opportunities</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Research Programs</h3>
                            <p className="text-gray-300">PhD programs in cutting-edge areas of computer science and artificial intelligence</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academics;