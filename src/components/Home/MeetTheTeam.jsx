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
];

const MeetTheTeam = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="mb-8 text-3xl font-bold text-gray-800">Meet The Team</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                    {executiveMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden bg-white rounded-lg shadow-lg"
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.4 },
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
