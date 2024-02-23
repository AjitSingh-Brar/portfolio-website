"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TELUS Business Connect",
    description:
      "The TELUS Business Connect® Mobile solution is a professional call handling app only for your smartphones and tablets. Spend less time managing calls and more time on your business.",
    image: "/static/images/one.png",
    tag: ["All", "Web", "Mobile"],
    previewUrl: "https://www.telus.com/en/business/small/phone/cloud-phone",
  },
  {
    id: 2,
    title: "Limitless Martial Arts",
    description:
      "Web application of a Martial Arts School, offering classes such as Kickboxing, Boxing, Muay Thai, Taekwondo, Karate, Kung Fu and Group Fitness Classes via online training.",
    image: "/static/images/2.png",
    tag: ["All", "Web"],
    previewUrl: "https://limitlessmartialarts.ca/",
  },
  {
    id: 3,
    title: "Pivotal General Contracting",
    description:
      "Web application of a Trusted Business Partner for providing exceptional General Contracting Services. Our comprehensive range of services includes: whole home renovation, Home Additons, etc.",
    image: "/static/images/3.png",
    tag: ["All", "Web"],
    previewUrl: "https://pivotalgc.ca/",
  },
  {
    id: 4,
    title: "Cobrie, Restaurant & Catering",
    description:
      "Web application for a Restaurant providing online services of authentic catering, takeout and home meal delieveries by the finest chefs for the customers across Ottawa.",
    image: "/static/images/4.png",
    tag: ["All", "Web"],
    previewUrl: "https://cobrie.ca/ ",
  },
  {
    id: 5,
    title: "H2R Business Solutions",
    description:
      "Web Application for the organization to support clients with services ranging from dedicated outsourced HR support to more complex consultative services including compensation, workforce planning, etc.",
    image: "/static/images/5.png",
    tag: ["All", "Web"],
    previewUrl: "https://yourh2r.com/",
  },
  {
    id: 6,
    title: "Luxsonic Technologies Inc",
    description:
      "Web Application for the organization to support the healthcare industry with immersive tools that enhance medical education, professional training, and healthcare delivery",
    image: "/static/images/6.png",
    tag: ["All", "Web", "Mobile"],
    previewUrl: "https://luxsonic.ca/",
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
    <section id="projects" className="py-28">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Technical Projects
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
          name="Mobile"
          isSelected={tag === "Mobile"}
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
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
