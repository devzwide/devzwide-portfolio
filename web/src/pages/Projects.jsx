import AboutTextParallelContent from "../components/ui/AboutTextParallelContent.jsx";
import PrimaryButton from "../components/ui/PrimaryButton.jsx";
import { motion } from "framer-motion";

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

const Projects = () => {
    return (
        <motion.div className="px-2 py-6 sm:px-4 md:px-8 md:py-10">
            <AboutTextParallelContent image="/zwide_about.jpg" content={
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 px-2 pb-8 pt-6 sm:px-4 md:max-w-5xl md:grid-cols-12 md:gap-8 md:pb-16 md:pt-10">
                    <h2 className="col-span-1 text-xl font-bold md:col-span-4 md:text-3xl">
                        Hi, I’m Zwide — I build software applications.
                    </h2>
                    <div className="col-span-1 md:col-span-8">
                        <p className="mb-4 text-base text-neutral-600 md:text-xl md:mb-4">
                            Not an average ICT student. I'm grinding through third year at DUT with a mission: Software Engineer now, AI Cloud Engineer later. I've mapped out my path like a pro — building full-stack apps, sharing my work like an open-source champion.
                        </p>
                    </div>
                </div>
            }/>
            <div className="max-w-2xl md:max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                        >
                            <div className="p-5 sm:p-8">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 md:text-2xl">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 mb-1 md:text-sm">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 whitespace-nowrap">
                                        Group Project
                                    </span>
                                </div>
                                
                                <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base">
                                    {project.description}
                                </p>
                                
                                <ul className="mt-4 space-y-2 md:mt-6 md:space-y-3">
                                    {project.details.map((detail, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700 text-sm md:text-base">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="mt-4 mb-4 flex flex-wrap gap-2">
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
                                    className="mt-2 w-full md:w-auto"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <motion.div 
                    className="mt-10 p-4 sm:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-center text-base md:text-lg text-gray-700">
                        Currently revisiting both projects to sharpen my <span className="font-semibold text-blue-600">solo development</span> skills and apply advanced concepts.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Projects;
