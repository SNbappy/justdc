const AchievementsSection = () => {
    return (
        <div className="bg-white py-16 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Heading */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-extrabold text-gray-800">
                        Our Achievements
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Over the years, our debate club has achieved remarkable milestones
                        in competitions and events. Here are some of our proudest moments.
                    </p>
                </div>

                {/* Achievement Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            National Champions
                        </h3>
                        <p className="text-gray-600 mt-3 leading-relaxed">
                            We secured the first position in the National Debate Championship
                            2023, showcasing exceptional teamwork and critical thinking.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Best Speaker Awards
                        </h3>
                        <p className="text-gray-600 mt-3 leading-relaxed">
                            Multiple members of our club have won prestigious Best Speaker
                            awards in regional and national competitions.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            International Recognition
                        </h3>
                        <p className="text-gray-600 mt-3 leading-relaxed">
                            Represented our country at the International Debate Championship
                            and ranked among the top 5 teams worldwide.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Social Impact Events
                        </h3>
                        <p className="text-gray-600 mt-3 leading-relaxed">
                            Organized social impact debates to raise awareness about key
                            global and local issues, gaining wide appreciation.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Outstanding Debater
                        </h3>
                        <p className="text-gray-600 mt-3 leading-relaxed">
                            One of our members was awarded the Outstanding Debater of the Year
                            at the National Debate Summit 2023.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Debate Workshop Leaders
                        </h3>
                        <p className="text-gray-600 mt-3 leading-relaxed">
                            Conducted workshops in over 15 schools and universities to inspire
                            the next generation of debaters.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementsSection;
