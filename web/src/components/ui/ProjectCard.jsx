import { motion } from "framer-motion";
import PrimaryButton from "./PrimaryButton.jsx";

const ProjectCard = () => {
    const projects = [
        {
            title: "Campus Security App",
            subtitle: "Group Project",
            description: "Mobile-native app using Kotlin + Jetpack Compose",
            details: [
                "Built core features including user auth, incident reporting, and real-time updates",
                "Integrated Firebase services"
            ],
            link: "https://github.com/iangovender/PBDV_SecurityApp",
            tags: ["Kotlin", "Jetpack Compose", "Firebase"]
        },
        {
            title: "Peer Tutoring Platform",
            subtitle: "Group Project",
            description: "Web app built with Flask (Python)",
            details: [
                "Developed key backend components, session handling, and UI improvements"
            ],
            link: "https://github.com/levs2424/PBDV-PROJECT",
            tags: ["Flask", "Python", "Web Development"]
        }
    ];

    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-2">
                                        {project.subtitle}
                                    </p>
                                </div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 whitespace-nowrap">
                                    Group Project
                                </span>
                            </div>
                            
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                {project.description}
                            </p>
                            
                            <ul className="mt-6 space-y-3">
                                {project.details.map((detail, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="mt-6 mb-6 flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <PrimaryButton 
                                link={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                name="View on GitHub" 
                                className="mt-2 w-full md:w-auto inline-flex justify-center items-center px-5 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <motion.div 
                className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <p className="text-center text-lg text-gray-700">
                    Currently revisiting both projects to sharpen my <span className="font-semibold text-blue-600">solo development</span> skills and apply advanced concepts.
                </p>
            </motion.div>
        </div>
    );
};

export default ProjectCard;