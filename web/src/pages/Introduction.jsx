import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "/1.jpg",
    },
    {
        id: 2,
        src: "/5.jpg",
    },
    {
        id: 3,
        src: "/7.jpg",
    },
    {
        id: 4,

        src: "/6.jpg",    
    },
    {
        id: 5,

        src: "/3.webp",    
    },
    {
        id: 6,

        src: "/zwide.jpg",    
    },
    {
        id: 7,

        src: "/2.jpg",    
    },
    {
        id: 8,

        src: "/4.jpg",    
    },
    {
        id: 9,

        src: "/9.jpg",    
    },
    {
        id: 10,
        src: "/10.jpg",
    },
    {
        id: 11,
        src: "/8.jpg",
    },
    {
        id: 12,
        src: "/12.jpg",
    },
    {
        id: 13,
        src: "/13.jpg",
    },
    {
        id: 14,
        src: "/14.jpg",
    },
    {
        id: 15,
        src: "/15.jpg",
    },
    {
        id: 16,
        src: "/11.jpg",
    },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full h-full"
        style={{
            backgroundImage: `url(${sq.src})`,
            backgroundSize: "cover",
        }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
        {squares.map((sq) => sq)}
        </div>
    );
};

const Introduction = () => {
    return (
        <div className="h-full w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-6xl mx-auto">
            <div>
                <span className="block mb-4 text-xs md:text-sm text-blue-300 font-medium">
                    Developer Zwide
                </span>
                <h3 className="text-4xl md:text-6xl font-semibold">
                    The future is Zwide.
                </h3>
                <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                    I'm a driven ICT student blending academic hustle with real-world grit, on a mission to become a badass Software Engineer and future AI Cloud mastermind.
                </p>
                <PrimaryButton link="/about" name="About Me" className="mt-8"/>
            </div>
            <ShuffleGrid />
        </div>
    );
};

export default Introduction;
