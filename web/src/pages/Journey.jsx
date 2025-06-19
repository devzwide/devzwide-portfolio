import { motion } from "framer-motion";
import AboutTextParallelContent from "../components/ui/AboutTextParallelContent.jsx";
import PrimaryButton from "../components/ui/PrimaryButton.jsx";

const timeline = [
  {
    year: "2022",
    title: "First Contact with Code",
    quote: "I didn’t know what I was doing yet, but something about HTML tags and CSS just clicked.",
    points: [
      "Got introduced to the idea of building websites.",
      "Completed basic web tutorials on FreeCodeCamp, focusing on HTML and CSS.",
      "Realized: “Wait... I can create stuff that lives on the internet?”",
      "Started dreaming of becoming someone who builds tech, not just uses it.",
    ],
  },
  {
    year: "2023",
    title: "Entering the Tech World (Officially)",
    quote: "I walked into DUT as a student, and left that year thinking like a problem-solver.",
    points: [
      "Enrolled at Durban University of Technology (DUT) for a Bachelor of Information and Communication Technology.",
      "Got exposed to real programming for the first time — C# was my gateway into object-oriented programming, logic, and thinking like a developer.",
      "Started to understand the bigger world of computers — how hardware, software, and systems come together.",
    ],
  },
  {
    year: "2024",
    title: "Systems, Logic, and a Side Hustle into Frontend",
    quote: "This was the year I started understanding how the entire system works — from low-level memory to high-level design.",
    points: [
      "Learned about architectures (started with MVC for C#).",
      "Algorithms & Data Structures using Python.",
      "Relational Databases and writing SQL queries like a pro.",
      "Exposed to computer hardware and software concepts — understanding how operating systems, memory, and CPUs actually do their thing.",
      "First hands-on experience with Cybersecurity — the basics of staying safe in the digital world.",
      "Started learning JavaScript and the basics of React.",
    ],
  },
  {
    year: "2025",
    title: "Platforms, Real Projects, and the Cloud Awakening",
    quote: "This is the year everything started connecting. Now I’m building, not just learning.",
    points: [
      "Took on Platform-Based Development — explored how apps live on web, mobile, and even industrial platforms.",
      "Built projects using Flask (Python backend), Kotlin (Android), React (frontend).",
      "Learned Java formally — sharpening my object-oriented skills.",
      "Took a subject on Research Skills – sharpened how I learn, analyze, and document systems.",
      "Started learning Cloud Computing fundamentals.",
    ],
  },
];

const future = {
  title: "Where I’m Headed",
  quote: "I’ve touched many tools, but now I’m focusing on mastering full-stack development while preparing for my future as an AI Cloud Engineer.",
  points: [
    "Building a major full-stack project combining React, Node.js, MongoDB, and possibly AWS or Firebase.",
    "Creating a proper GitHub portfolio and starting to blog on Medium.",
    "Growing my presence on LinkedIn and planning for internships or junior roles.",
    "Slowly starting to explore the world of AI + Cloud as my long-term destination.",
  ],
};

const summary = `From building simple HTML sites in 2022 to exploring cloud platforms and building full-stack apps in 2025, I’ve gone from a curious beginner to a committed builder. My journey is still just getting started — and I’m here for the long game.`;

const Content = () => {
  return (
    <div className="p-6 md:p-12">
      <div className="border-l-2 border-gray-300 pl-6 md:pl-8 space-y-12">
        {timeline.map((item) => (
          <div key={item.year} className="relative group">
            {/* Year bubble with hover effect */}
            <div className="absolute -left-10 md:-left-11 top-0 bg-white text-gray-800 rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center font-semibold text-sm md:text-base shadow-md border-2 border-gray-300 group-hover:bg-blue-50 group-hover:border-blue-400 group-hover:text-blue-600 transition-all duration-200">
              {item.year}
            </div>
            
            {/* Content card with subtle shadow on hover */}
            <div className="ml-2 p-4 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow duration-200">
              <div className="mb-2 font-bold text-lg text-gray-800">
                {item.title}
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({item.year})
                </span>
              </div>
              
              {item.quote && (
                <blockquote className="italic text-gray-600 mb-3 pl-3 border-l-2 border-gray-200">
                  “{item.quote}”
                </blockquote>
              )}
              
              <ul className="space-y-2">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block mt-1.5 mr-2 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        
        {/* Future item with different styling */}
        <div className="relative group">
          <div className="absolute -left-10 md:-left-11 top-0 bg-blue-100 text-blue-600 rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center font-semibold shadow-md border-2 border-blue-200 transition-all duration-200">
            →
          </div>
          
          <div className="ml-2 p-4 rounded-lg bg-blue-50 border border-blue-100">
            <div className="mb-2 font-bold text-lg text-blue-800">
              {future.title}
            </div>
            
            {future.quote && (
              <blockquote className="italic text-blue-600 mb-3 pl-3 border-l-2 border-blue-200">
                “{future.quote}”
              </blockquote>
            )}
            
            <ul className="space-y-2">
              {future.points.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block mt-1.5 mr-2 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                  <span className="text-blue-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Summary box with improved styling */}
      <div className="mt-12 p-5 bg-gray-50 border-l-4 border-blue-400 rounded-lg shadow-sm">
        <div className="font-bold text-lg mb-2 text-gray-800 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-gray-700 pl-1">"{summary}"</p>
      </div>
    </div>
  );
};

const Journey = () => {
  return (
    <motion.div className="p-8">
      <AboutTextParallelContent image="/zwide_about.jpg" content={
          <Content />
      }/>
      
    </motion.div>
  );
};

export default Journey;