import { useState, useEffect } from "react";

const images = [
    "https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/467247225_1009364671204968_3897792994938362722_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=u8IiePmOvzsQ7kNvgEkJtSY&_nc_zt=23&_nc_ht=scontent.fcgp7-1.fna&_nc_gid=Ad0l78SCvdicNgHjK4jHj-j&oh=00_AYB7ytewHd5v14yMpekeeHO_IhudU34Ks488RiXvFLxoTA&oe=67465A26",
    "https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/464923377_996880345786734_7899550842560263720_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Qu-prNvRDOcQ7kNvgFo741t&_nc_zt=23&_nc_ht=scontent.fcgp7-1.fna&_nc_gid=ASMCVEvOoTGTX6-Px4jTTDC&oh=00_AYDO27sYV84OoPX1qgTaMZ9Mni5n35tB9y8Hid4CkRh_fQ&oe=6746831B",
    "https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/432694415_839512881523482_613226041565485902_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=I1wUgw1KHO4Q7kNvgEJxL4B&_nc_zt=23&_nc_ht=scontent.fcgp7-1.fna&_nc_gid=AgwWHlG9zCyMMjm_SlLqcVq&oh=00_AYA-p7D2QW4n82oMoiLhFQkYMdXZCyNccCdfDyq7O8NruQ&oe=67466651",
    "https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/468089644_1013729734101795_7406415021985319766_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=w0-spbpdfkMQ7kNvgG-XY-8&_nc_zt=23&_nc_ht=scontent.fcgp7-1.fna&_nc_gid=Aojj0I7nOE3rUrSOx-mg7q_&oh=00_AYDPC5yWX2A1WiY42XGumbaRDn_LZsBEFGDcA-Hz4Ij1sQ&oe=67465716",
];

const AchievementSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to move to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Auto-slide using useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Handle touch start
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    // Handle touch move
    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    // Handle touch end
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            nextSlide(); // Swipe left
        }

        if (touchEnd - touchStart > 50) {
            prevSlide(); // Swipe right
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <div>
            <div className="relative w-full max-w-4xl py-8 mx-auto">
                {/* Slider */}
                <div
                    className="overflow-hidden rounded-lg shadow-md"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
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
