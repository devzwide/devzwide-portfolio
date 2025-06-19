import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { SiGithub, SiLinkedin } from "react-icons/si";
import ProjectCard from "../components/ui/ProjectCard.jsx";

const Block = ({ className, ...rest }) => {
    return (
        <motion.div
        variants={{
            initial: {
            scale: 0.5,
            y: 50,
            opacity: 0,
            },
            animate: {
            scale: 1,
            y: 0,
            opacity: 1,
            },
        }}
        transition={{
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
        }}
        className={twMerge(
            "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
            className
        )}
        {...rest}
        />
    );
};

const HeaderBlock = () => (
    <Block className="col-span-12 bg-transparent border-none row-span-2 md:col-span-6">
        <img
            src="/zwide.jpg"
            alt="avatar"
            className="mb-4 size-14 rounded-full"
        />
        <h1 className="mb-12 text-4xl font-medium text-gray-900">
            Hi, I'm Zwide.{" "}
            <span className="text-zinc-400">
                I build software applications.
            </span>
        </h1>
    </Block>
);

const Projects = () => {
    return (
        <div className="min-h-screen px-4 py-12 text-zinc-50">
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto max-w-full"
            >
                <HeaderBlock />
            </motion.div>

            <ProjectCard />
        </div>
    );
};

export default Projects;
