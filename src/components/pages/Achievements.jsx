import React from 'react';

const Achievements = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#FF6FD8] via-[#6A11CB] to-[#00C9A7] text-transparent bg-clip-text">
                        Achievements
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12">
                        Recognition and accolades in academics, research, and innovation
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Research Publications</h3>
                            <p className="text-gray-300">Over 500+ research papers published in top-tier international journals and conferences</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Awards & Recognition</h3>
                            <p className="text-gray-300">Multiple national and international awards for excellence in education and research</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Student Achievements</h3>
                            <p className="text-gray-300">Students consistently ranking in top percentiles in competitive exams and placements</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Patents & Innovation</h3>
                            <p className="text-gray-300">Numerous patents filed and granted for innovative technological solutions</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Industry Collaboration</h3>
                            <p className="text-gray-300">Successful partnerships with leading tech companies for research and development</p>
                        </div>

                        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-xl font-semibold mb-4 text-[#00B4D8]">Accreditation</h3>
                            <p className="text-gray-300">NAAC A+ accreditation and NBA accreditation for quality education</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;