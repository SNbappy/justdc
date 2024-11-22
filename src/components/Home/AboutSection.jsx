const AboutSection = () => {
    return (
        <div className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-6 lg:px-20">
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto space-y-12">
                {/* Heading */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-extrabold text-gray-800">
                        About Our Debate Club
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Our debate club is a hub for aspiring speakers, critical thinkers,
                        and changemakers. Through vibrant discussions, collaborative learning,
                        and engaging debates, we empower our members to express themselves
                        confidently and effectively.
                    </p>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Feature 1 */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <div className="text-4xl mb-4">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3 className="text-xl font-semibold">
                            Community of Thinkers
                        </h3>
                        <p className="mt-2 leading-relaxed">
                            Connect with like-minded individuals who share a passion for
                            debating, public speaking, and intellectual growth.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <div className="text-4xl mb-4">
                            <i className="fas fa-microphone"></i>
                        </div>
                        <h3 className="text-xl font-semibold">
                            Sharpen Your Skills
                        </h3>
                        <p className="mt-2 leading-relaxed">
                            Develop confidence, enhance critical thinking, and master the
                            art of persuasion in a supportive environment.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <div className="text-4xl mb-4">
                            <i className="fas fa-trophy"></i>
                        </div>
                        <h3 className="text-xl font-semibold">
                            Celebrate Achievements
                        </h3>
                        <p className="mt-2 leading-relaxed">
                            Participate in exciting competitions and celebrate your progress
                            as a speaker and debater.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <div className="text-4xl mb-4">
                            <i className="fas fa-book-open"></i>
                        </div>
                        <h3 className="text-xl font-semibold">
                            Expand Your Knowledge
                        </h3>
                        <p className="mt-2 leading-relaxed">
                            Dive into diverse topics and explore new perspectives that
                            challenge and broaden your worldview.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <div className="text-4xl mb-4">
                            <i className="fas fa-handshake"></i>
                        </div>
                        <h3 className="text-xl font-semibold">
                            Build Friendships
                        </h3>
                        <p className="mt-2 leading-relaxed">
                            Forge lasting relationships with fellow debaters and create
                            memorable experiences together.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <div className="text-4xl mb-4">
                            <i className="fas fa-lightbulb"></i>
                        </div>
                        <h3 className="text-xl font-semibold">
                            Foster Creativity
                        </h3>
                        <p className="mt-2 leading-relaxed">
                            Learn to think on your feet and present ideas creatively,
                            fostering innovation and adaptability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
