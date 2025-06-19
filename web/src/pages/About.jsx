import AboutTextParallelContent from "../components/ui/AboutTextParallelContent.jsx";
import PrimaryButton from "../components/ui/PrimaryButton.jsx";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div className="p-8">
            <AboutTextParallelContent image="/zwide_about.jpg" content={
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
                    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
                        Hi, I’m Zwide — future Software Engineer & AI Cloud Engineer.
                    </h2>
                    <div className="col-span-1 md:col-span-8">
                        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                            Not an average ICT student. I'm grinding through third year at DUT with a mission: Software Engineer now, AI Cloud Engineer later. I've mapped out my path like a pro — building full-stack apps, sharing my work like an open-source champion.
                        </p>
                        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
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