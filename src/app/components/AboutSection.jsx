"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="ml-2 flex flex-row gap-x-10">
        <div>
          <ul className="list-disc pl-2">
            <li>React</li>
            <li>Node.js</li>
            <li>Next.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div>
          <ul className="list-disc pl-2">
            <li>MongoDB</li>
            <li>Java Spring boot</li>
            <li>Google Cloud</li>
            <li>AWS</li>
            <li>Angular</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Eudcation",
    id: "education",
    content: (
      <ul className="ml-2 list-disc pl-2">
        <li>
          Computer System Technology: Software Engineering, Sheridan College
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="about text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-28 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about-image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a detail-oriented, responsible, and versatile Full Stack
            Developer. With over 3 years of expertise in web development, I
            uphold a technical proficiency in Javascript, Java, Typescript, and
            popular frameworks such as Node.js, Express, React.js, Next.js,
            Angular, as well as databases like MySQL and MongoDB. Additionally,
            I have hands-on experience with Springboot and Ruby for Java web
            development. I am continuously learning, and staying up-to-date with
            the trends, and emerging technologies. Also, I acquire a practical
            knowledge of working with services of Google Cloud and AWS,
            including the expertise of CI/CD principles.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
