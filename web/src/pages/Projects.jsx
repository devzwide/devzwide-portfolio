import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiYoutube } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

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

const SocialsBlock = () => (
    <>
        <Block
        whileHover={{
            rotate: "2.5deg",
            scale: 1.1,
        }}
        className="col-span-6 bg-red-500 md:col-span-3"
        >
        <a
            href="#"
            className="grid h-full place-content-center text-3xl text-white"
        >
            <SiYoutube />
        </a>
        </Block>
        <Block
        whileHover={{
            rotate: "-2.5deg",
            scale: 1.1,
        }}
        className="col-span-6 bg-green-600 md:col-span-3"
        >
        <a
            href="#"
            className="grid h-full place-content-center text-3xl text-white"
        >
            <SiGithub />
        </a>
        </Block>
        <Block
        whileHover={{
            rotate: "-2.5deg",
            scale: 1.1,
        }}
        className="col-span-6 bg-zinc-50 md:col-span-3"
        >
        <a
            href="#"
            className="grid h-full place-content-center text-3xl text-black"
        >
            <SiTiktok />
        </a>
        </Block>
        <Block
        whileHover={{
            rotate: "2.5deg",
            scale: 1.1,
        }}
        className="col-span-6 bg-blue-500 md:col-span-3"
        >
        <a
            href="#"
            className="grid h-full place-content-center text-3xl text-white"
        >
            <FaTwitter />
        </a>
        </Block>
    </>
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
                className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
            >
                <HeaderBlock />
                <SocialsBlock />
            </motion.div>
        </div>
    );
};

export default Projects;
