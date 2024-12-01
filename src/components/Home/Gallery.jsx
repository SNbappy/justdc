import React from "react";

const Gallery = () => {
    const videos = [
        {
            id: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/justdebateclub18/videos/day-1-of-4th-inter-department-debate-competition-at-a-glance/1084314846527812", // Replace with actual YouTube video ID
            title: "Inter Department Debate",
            type: "youtube",
        },
        {
            id: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/100063943331416/videos/2003842756718007",
            title: "Fun time",
            type: "facebook",
        },
        {
            id: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/justdebateclub18/videos/%E0%A6%AD%E0%A6%BE%E0%A6%B2%E0%A6%AC%E0%A6%BE%E0%A6%B8%E0%A6%BE-%E0%A6%A6%E0%A6%BF%E0%A6%AC%E0%A6%B8-%E0%A6%B0%E0%A6%AE%E0%A7%8D%E0%A6%AF-%E0%A6%AC%E0%A6%BF%E0%A6%A4%E0%A6%B0%E0%A7%8D%E0%A6%95%E0%A7%A7%E0%A7%AA%E0%A6%AB%E0%A7%87%E0%A7%AC%E0%A7%AA%E0%A7%A8%E0%A7%A6%E0%A7%A8%E0%A7%AA/694788179488719", // Replace with actual YouTube video ID
            title: "Rommo Debate",
            type: "youtube",
        },
    ];

    return (
        <section id="gallery" className="py-16 bg-gray-50">
            <div className="px-6 mx-auto text-center max-w-7xl">
                <h2 className="mb-4 text-3xl font-bold text-gray-800">Some Moments</h2>
                <p className="mb-10 text-lg text-gray-600">
                    Explore highlights from our debates and events.
                </p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105"
                        >
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src={video.id}
                                    title={video.title}
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-700">
                                    {video.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
