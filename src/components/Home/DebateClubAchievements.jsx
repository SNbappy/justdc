import React from 'react';
import CountUp from 'react-countup';

const DebateClubAchievements = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full p-10 mx-auto bg-white rounded-lg shadow-2xl max-w-7xl">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* Current Members */}
                    <div className="p-8 text-center transition duration-300 transform bg-blue-100 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
                        <h2 className="mb-4 text-xl font-medium text-gray-700">Current Members</h2>
                        <p className="text-5xl font-bold text-blue-600">
                            <CountUp start={0} end={150} duration={3} />+
                        </p>
                    </div>

                    {/* Workshops */}
                    <div className="p-8 text-center transition duration-300 transform bg-yellow-100 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
                        <h2 className="mb-4 text-xl font-medium text-gray-700">Workshops</h2>
                        <p className="text-5xl font-bold text-yellow-600">
                            <CountUp start={0} end={150} duration={4} />+
                        </p>
                    </div>

                    {/* Social Events */}
                    <div className="p-8 text-center transition duration-300 transform bg-purple-100 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
                        <h2 className="mb-4 text-xl font-medium text-gray-700">Social Events</h2>
                        <p className="text-5xl font-bold text-purple-600">
                            <CountUp start={0} end={30} duration={4} />+
                        </p>
                    </div>

                    {/* Fund Raising */}
                    <div className="p-8 text-center transition duration-300 transform bg-red-100 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
                        <h2 className="mb-4 text-xl font-medium text-gray-700">Fund Raising</h2>
                        <p className="text-5xl font-bold text-red-600">
                            <CountUp start={0} end={15} duration={5} />+
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DebateClubAchievements;
