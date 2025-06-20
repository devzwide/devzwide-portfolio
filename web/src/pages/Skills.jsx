import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg"
        alt="React"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="https://www.curotec.com/wp-content/uploads/2024/08/Express-1.png?w=1024"
        alt="Node (Express)"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuawUuQCcq6fD-KpdmL4QixUOyqQqdrVNIDg&s"
        alt="Firebase"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://cdn.prod.website-files.com/638106149a6441f0708f5c0a/66c72620456d49ce94e2a2bb_66c72560c6e3b9a31fd0d85b_github-git-cocos-creator.webp"
        alt="GitHub"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg"
        alt=".Net"
        rotate="-7deg"
        top="55%"
        left="85%"
        className="w-24 md:w-40"
      />
      <Card
        containerRef={containerRef}
        src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
        alt="Express.js"
        rotate="4deg"
        top="35%"
        left="30%"
        className="w-32 md:w-52"
      />
      <Card
        containerRef={containerRef}
        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg"
        alt="Flask"
        rotate="-2deg"
        top="65%"
        left="60%"
        className="w-28 md:w-44"
      />
      <Card
        containerRef={containerRef}
        src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
        alt="NodeJS"
        rotate="6deg"
        top="50%"
        left="25%"
        className="w-32 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
        alt="MongoDB"
        rotate="-6deg"
        top="60%"
        left="40%"
        className="w-28 md:w-44"
      />
      <Card
        containerRef={containerRef}
        src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
        alt="Postgres"
        rotate="3deg"
        top="75%"
        left="80%"
        className="w-24 md:w-40"
      />
      <Card
        containerRef={containerRef}
        src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
        alt="Git"
        rotate="-4deg"
        top="55%"
        left="10%"
        className="w-24 md:w-36"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};

const Skills = () => {
    return (
        <section className="relative grid min-h-screen w-full place-content-center overflow-hidden">
            <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
                ZWIDE<span className="text-indigo-500">.</span>
            </h2>
            <Cards />
        </section>
    );
};

export default Skills;