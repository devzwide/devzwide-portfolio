import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
        <div className="px-2 sm:px-4 md:px-8">
            <div className="relative h-[90vh] md:h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};

const IMG_PADDING = 8;

const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(70vh - ${IMG_PADDING * 2}px)`, // mobile-first height
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-2xl md:rounded-3xl"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{ opacity }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({ subheading, heading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{ y, opacity }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-[70vh] md:h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-base font-medium md:mb-4 md:text-3xl">
                {subheading}
            </p>
            <p className="text-center text-2xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};

const AboutTextParallelContent = ({ content, image }) => {
    return (
        <div className="bg-white">
            <TextParallaxContent
                imgUrl={image}
                subheading="Bukeka Nxumalo"
                heading="Code with purpose, build for impact."
            >
                {content}
            </TextParallaxContent>
        </div>
    );
};

export default AboutTextParallelContent;