import { useState, useEffect } from "react";
import slide_1 from "../../images/slide-1.jpg";
import slide_2 from "../../images/slide-2.jpg";
import slide_3 from "../../images/slide-3.jpg";
import slide_4 from "../../images/slide-4.jpg";

const images = [slide_1, slide_2, slide_3, slide_4];

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
        <div className="relative w-full h-[80vh] lg:h-screen md:h-screen">
            {/* Slider */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="flex h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 w-full h-full">
                            <img
                                src={image}
                                alt={`Achievement ${index + 1}`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-white bg-black bg-opacity-40">
                {/* Tagline */}
                <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 md:text-4xl lg:text-5xl">
                    Uniting Voices, Shaping Futures
                </h1>

                {/* Brief Description */}
                <p className="max-w-3xl mx-auto mt-4 text-sm text-center text-gray-100 opacity-90 md:text-base lg:text-lg">
                    JUST Debate Club is dedicated to fostering critical thinking, public speaking, and leadership through engaging debates and discussions. We provide a platform for students to excel and make their voices heard on global issues.
                </p>

                {/* Call to Action Button */}
                <div className="flex justify-center mt-6">
                    <a
                        href="#join"
                        className="inline-block px-6 py-2 text-sm font-semibold text-white transition duration-300 bg-orange-500 rounded-lg hover:bg-orange-600 md:px-8 md:py-3 md:text-lg"
                    >
                        Join Us Today
                    </a>
                </div>
            </div>

            {/* Dots */}
            <div className="absolute z-20 flex justify-center w-full px-4 space-x-2 bottom-6">
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
    );

};

export default AchievementSlider;