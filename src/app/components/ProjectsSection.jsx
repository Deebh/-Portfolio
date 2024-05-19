"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "My Portfolio",
    description: "Crafted a dynamic React portfolio website with Next.js, showcasing my skills, projects, and experiences in an engaging and efficient manner.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    // previewUrl: "/",
  },
  {
    id: 2,
    title: "Smart Image Generation Website",
    description: " A Web App generating Images On User’s description and could be shared or downloaded.Used MERN stack, Open AI APIs, Tailwindcss,Cloudinary.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deebh/Image-generator",
    // previewUrl: "/",
  },
  {
    id: 3,
    title: "Let's BINGO!",
    description: "A multiplayer web version of classic BINGO Game.A responsive multiplayer game utilizing web sockets where other players can enter the room, connect and play.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deebh/Bingo",
    // previewUrl: "/",
  },
  {
    id: 4,
    title: "Know The Weather",
    description: "Dynamic weather app built with Node.js and React.js, providing real-time weather updates and forecasts for users.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deebh/Weather",
    // previewUrl: "/",
  },
  {
    id: 5,
    title: "Keeper App",
    description: "A Web-app inspired by Google Keep to help users take instant notes in a simple and intuitive manner.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deebh/Keeper",
    // previewUrl: "/",
  },
  {
    id: 6,
    title: "Human Activity Recognition",
    description: "Developed a Human Activity Recognition (HAR) system, utilizing Python and ML techniques to classify smartphone sensor data into 6 activities.",
    image: "/images/projects/6.png",
    tag: ["All", "DataScience"],
    gitUrl: "/",
    // previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DataScience"
          isSelected={tag === "DataScience"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
