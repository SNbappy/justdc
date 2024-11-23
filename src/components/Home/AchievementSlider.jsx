import { useState, useEffect } from "react";

const images = [
    "https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/467247225_1009364671204968_3897792994938362722_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=u8IiePmOvzsQ7kNvgEkJtSY&_nc_zt=23&_nc_ht=scontent.fcgp7-1.fna&_nc_gid=Ad0l78SCvdicNgHjK4jHj-j&oh=00_AYB7ytewHd5v14yMpekeeHO_IhudU34Ks488RiXvFLxoTA&oe=67465A26",
    "https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/464923377_996880345786734_7899550842560263720_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Qu-prNvRDOcQ7kNvgFo741t&_nc_zt=23&_nc_ht=scontent.fcgp7-1.fna&_nc_gid=ASMCVEvOoTGTX6-Px4jTTDC&oh=00_AYDO27sYV84OoPX1qgTaMZ9Mni5n35tB9y8Hid4CkRh_fQ&oe=6746831B",
    "https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/432694415_839512881523482_613226041565485902_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=I1wUgw1KHO4Q7kNvgEJxL4B&_nc_zt=23&_nc_ht=scontent.fcgp7-1.fna&_nc_gid=AgwWHlG9zCyMMjm_SlLqcVq&oh=00_AYA-p7D2QW4n82oMoiLhFQkYMdXZCyNccCdfDyq7O8NruQ&oe=67466651",
    "https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/468089644_1013729734101795_7406415021985319766_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=w0-spbpdfkMQ7kNvgG-XY-8&_nc_zt=23&_nc_ht=scontent.fcgp7-1.fna&_nc_gid=Aojj0I7nOE3rUrSOx-mg7q_&oh=00_AYDPC5yWX2A1WiY42XGumbaRDn_LZsBEFGDcA-Hz4Ij1sQ&oe=67465716",
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
            <div className="relative w-full max-w-4xl py-8 mx-auto">
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
