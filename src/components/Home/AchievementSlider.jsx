import { useState, useEffect } from "react";
import slide_1 from "../../images/slide-1.jpg"
import slide_2 from "../../images/slide-2.jpg"
import slide_3 from "../../images/slide-3.jpg"
import slide_4 from "../../images/slide-4.jpg"

const images = [
    slide_1, slide_2, slide_3, slide_4
];


const AchievementSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Auto-slide using useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="">
            <section className="relative text-white bg-gradient-to-r">
                {/* Background Image
                <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{
                        backgroundImage: "url('path/to/debate-image.jpg')",
                        opacity: 0.7,
                    }}
                ></div> */}

                {/* Content Wrapper */}
                <div className="relative z-10 px-6 pt-6 pb-12 mx-auto max-w-7xl sm:px-12">
                    <div className="space-y-6 text-center">
                        {/* Tagline */}
                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 md:text-5xl">
                            Uniting Voices, Shaping Futures
                        </h1>

                        {/* Brief Description */}
                        <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-700 md:text-xl opacity-90">
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
            <div className="relative w-full max-w-4xl mx-auto">
                {/* Slider */}
                <div className="overflow-hidden rounded-lg shadow-md">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="flex items-start justify-center min-w-full"
                            >
                                <img
                                    src={image}
                                    alt={`Achievement ${index + 1}`}
                                    className="w-full h-auto sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-3 w-3 rounded-full ${currentIndex === index
                                ? "bg-blue-600"
                                : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AchievementSlider;