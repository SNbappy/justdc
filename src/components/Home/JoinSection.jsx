import { useEffect, useRef } from "react";

const JoinSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll(".card");
            const sectionTop = sectionRef.current.getBoundingClientRect().top;

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const overlapThreshold = 100; // Maximum overlap distance

                if (rect.top <= sectionTop + index * overlapThreshold) {
                    // Overlap forward
                    card.style.transform = `translateY(-${index * overlapThreshold}px)`;
                    card.style.zIndex = `${100 + index}`; // Higher z-index ensures cards are on top
                } else {
                    // Reset position if no overlap
                    card.style.transform = `translateY(0px)`;
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="relative bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-50 py-16 px-6 lg:px-20"
        >
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
                        Join the Debate Revolution!
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Become part of the most dynamic and impactful debate club on campus. Ready to boost your confidence, enhance your communication skills, and make lifelong connections? Join us today!
                    </p>
                </div>

                {/* Cards Section */}
                <div className="relative mt-16 space-y-8">
                    {/* Card 1 */}
                    <div
                        className="card bg-gradient-to-r from-blue-500 to-blue-300 p-8 rounded-xl shadow-xl sticky top-20 transition-transform duration-300"
                        style={{ height: "300px" }}
                    >
                        <h3 className="text-2xl font-semibold text-white">🎓 Who can join?</h3>
                        <p className="mt-4 text-lg text-white">
                            Students from all departments who are eager to learn, debate, and grow are welcome to join! No experience is necessary—just a passion for learning and engaging in meaningful discussions.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="card bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-xl shadow-xl sticky top-20 transition-transform duration-300"
                        style={{ height: "300px" }}
                    >
                        <h3 className="text-2xl font-semibold text-white">🌟 Why join JUSTDC?</h3>
                        <ul className="mt-4 text-lg text-white list-inside">
                            <li>* Boost your confidence and communication skills</li>
                            <li>* Engage in exciting debates and discussions</li>
                            <li>* Meet like-minded individuals and build lifelong friendships</li>
                            <li>* Represent JUST in inter-university and World debate competitions</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="card bg-gradient-to-r from-teal-500 to-cyan-500 p-8 rounded-xl shadow-xl sticky top-20 transition-transform duration-300"
                        style={{ height: "300px" }}
                    >
                        <h3 className="text-2xl font-semibold text-white">📅 How to Apply?</h3>
                        <ol className="mt-4 text-lg text-white list-decimal list-inside">
                            <li>Fill out the registration form (available at the JUSTDC Office)</li>
                            <li>Join our introductory session on campus to learn more</li>
                        </ol>
                        <a
                            href="#"
                            className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinSection;
