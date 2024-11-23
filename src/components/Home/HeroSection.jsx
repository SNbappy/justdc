import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative text-white bg-gradient-to-r from-blue-600 to-blue-800">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                    backgroundImage: "url('path/to/debate-image.jpg')",
                    opacity: 0.7,
                }}
            ></div>

            {/* Content Wrapper */}
            <div className="relative z-10 px-6 py-24 mx-auto max-w-7xl sm:px-12">
                <div className="space-y-6 text-center">
                    {/* Tagline */}
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                        Uniting Voices, Shaping Futures
                    </h1>

                    {/* Brief Description */}
                    <p className="text-lg text-white md:text-xl opacity-90">
                        JUST Debate Club is dedicated to fostering critical thinking, public speaking, and leadership through engaging debates and discussions. We provide a platform for students to excel and make their voices heard on global issues.
                    </p>

                    {/* Call to Action Button */}
                    <div className="flex justify-center mt-6">
                        <a
                            href="#join"
                            className="inline-block px-8 py-3 text-lg font-semibold text-white transition duration-300 bg-orange-500 rounded-lg hover:bg-orange-600"
                        >
                            Join Us Today
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
