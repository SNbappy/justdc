import { motion } from "framer-motion";
import { useState } from "react";

const executiveMembers = [
    {
        name: "Daniel Brown",
        position: "Chief Technology Officer",
        image: "https://via.placeholder.com/400",
    },
    {
        name: "Sophia Turner",
        position: "Chief Marketing Officer",
        image: "https://via.placeholder.com/400",
    },
    {
        name: "David Wilson",
        position: "Chief Operating Officer",
        image: "https://via.placeholder.com/400",
    },
    {
        name: "Olivia Moore",
        position: "Head of HR",
        image: "https://via.placeholder.com/400",
    },
    // Add 25+ more members here as per your requirement
];

const MeetTheTeam = () => {
    const [activeMember, setActiveMember] = useState(null); // To track the hovered/clicked member

    return (
        <div className="py-16">
            <div className="container relative mx-auto text-center">
                <h2 className="mb-8 text-3xl font-bold text-gray-800">Meet The Team</h2>
                <div className="flex space-x-8 overflow-x-auto whitespace-nowrap">
                    {executiveMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="relative inline-block bg-white rounded-lg shadow-lg group"
                            onMouseEnter={() => setActiveMember(member)}
                            onMouseLeave={() => setActiveMember(null)}
                            style={{ width: "250px" }} // Fixed width for each card
                        >
                            {/* Cropped Image */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="object-cover w-full h-32 group-hover:opacity-70"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80"></div>
                            <div className="absolute text-white bottom-4 left-4">
                                <h3 className="text-lg font-semibold">{member.name}</h3>
                                <p className="text-sm font-medium">{member.position}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Card for Active Member */}
                {activeMember && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                        className="absolute z-50 w-11/12 p-6 transform -translate-x-1/2 bg-white rounded-lg shadow-2xl top-10 left-1/2 sm:w-96"
                    >
                        <img
                            src={activeMember.image}
                            alt={activeMember.name}
                            className="object-cover w-full h-56 rounded-lg"
                        />
                        <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                            {activeMember.name}
                        </h3>
                        <p className="text-gray-600">{activeMember.position}</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default MeetTheTeam;
