import AboutTextParallelContent from "../components/ui/AboutTextParallelContent.jsx";
import PrimaryButton from "../components/ui/PrimaryButton.jsx";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div className="p-8">
            <AboutTextParallelContent image="/zwide_about.jpg" content={
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 px-2 pb-12 pt-8 sm:px-4 md:max-w-5xl md:grid-cols-12 md:gap-8 md:pb-24 md:pt-12">
                    <h2 className="col-span-1 text-2xl font-bold md:col-span-4 md:text-3xl">
                        Hi, I’m Zwide — future Software Engineer & AI Cloud Engineer.
                    </h2>
                    <div className="col-span-1 md:col-span-8">
                        <p className="mb-4 text-base text-neutral-600 md:text-xl md:mb-4">
                            Not an average ICT student. I'm grinding through third year at DUT with a mission: Software Engineer now, AI Cloud Engineer later. I've mapped out my path like a pro — building full-stack apps, sharing my work like an open-source champion.
                        </p>
                        <p className="mb-6 text-base text-neutral-600 md:text-xl md:mb-8">
                            Whether it's mobile or web, I'm going Node.js backend for everything, and not just to build — but to architect systems like a boss.
                        </p>
                        <PrimaryButton link="/projects" name="View Projects" className="mt-4"/>
                    </div>
                </div>
            }/>
        </motion.div>
    );
};

export default About;