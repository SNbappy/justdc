import { motion } from "framer-motion";

const executiveMembers = [
    {
        name: "John Doe",
        position: "President",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Jane Smith",
        position: "Secretary",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Michael Lee",
        position: "Treasurer",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Emily Davis",
        position: "Vice President",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Daniel Brown",
        position: "Chief Technology Officer",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Sophia Turner",
        position: "Chief Marketing Officer",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "David Wilson",
        position: "Chief Operating Officer",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Olivia Moore",
        position: "Head of HR",
        image: "https://via.placeholder.com/150",
    },
];

const MeetTheTeam = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="mb-8 text-3xl font-bold text-gray-800">Meet The Team</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
                    {executiveMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden bg-white rounded-lg shadow-lg"
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.4 },
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                            animate={{
                                x: ["-10%", "10%", "-10%"], // Floating left-right motion
                                y: ["0%", "-5%", "0%"], // Floating up and down
                            }}
                            transition={{
                                duration: 8, // Cycle duration for floating
                                repeat: Infinity, // Infinite loop
                                ease: "easeInOut",
                            }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="object-cover w-full h-56"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80"></div>
                            <div className="absolute text-white bottom-4 left-4">
                                <h3 className="text-lg font-semibold">{member.name}</h3>
                                <p className="text-sm font-medium">{member.position}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetTheTeam;
