import React, { useState } from "react";
import css from "../public/css.jpg";
import html from "../../public/html.png";
import mongodb from "../../public/MonGO.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import react from "../../public/reactjs.png";

const About = () => {
  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("experience");

  // Data objects
  const experience = {
    icon: "javascript",
    title: "My Experience",
    description: "Details about my experience.",
    items: [
      {
        company: "07 Services",
        position: "Full Stack Developer",
        duration: "6 months",
      },
    ],
  };

  const about = {
    title: "About Me",
    description: "Brief details about me.",
    info: [
      { fieldName: "Name", fieldValue: "Daljeet Singh" },
      { fieldName: "Phone", fieldValue: "(+91) 628 837 89930" },
      { fieldName: "Experience", fieldValue: "9 months" },
      { fieldName: "Email", fieldValue: "singhdaljeet62837@gmail.com" },
      { fieldName: "Languages", fieldValue: "English, Hindi, Punjabi" },
    ],
  };

  const education = {
    icon: "javascript",
    title: "My Education",
    description: "Educational background details.",
    items: [
      {
        institution: "BSF Sr Sec School",
        degree: "Matric to +2",
        duration: "2021",
      },
      {
        institution: "07 Services",
        position: "Full Stack Web Developer",
        duration: "6 months",
      },
      {
        institution: "Trinity College",
        position: "BCA",
        duration: "2022-present",
      },
    ],
  };

  const skills = {
    title: "My Skills",
    description: "Skills and technologies I work with.",
    skillList: [
      { icon: html, name: "HTML5" },
      { icon: css, name: "CSS" },
      { icon: javascript, name: "JavaScript" },
      { icon: react, name: "React" },
      { icon: oracle, name: "Node.js" },
      { icon: mongodb, name: "MongoDB" },
    ],
  };

  // Function to render content based on selected category
  const renderContent = () => {
    if (selectedCategory === "experience") {
      return (
        <div className="p-4">
          <h2 className="text-xl font-bold">{experience.title}</h2>
          <p className="mb-4">{experience.description}</p>
          <ul className="space-y-2">
            {experience.items.map((item, index) => (
              <li
                key={index}
                className="p-2 border rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                <h3 className="font-semibold">{item.company}</h3>
                <p>Position: {item.position}</p>
                <p>Duration: {item.duration}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (selectedCategory === "about") {
      return (
        <div className="p-4">
          <h2 className="text-xl font-bold">{about.title}</h2>
          <p className="mb-4">{about.description}</p>
          <ul className="space-y-2">
            {about.info.map((field, index) => (
              <li key={index} className="flex justify-between">
                <span className="font-semibold">{field.fieldName}:</span>
                <span>{field.fieldValue}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (selectedCategory === "education") {
      return (
        <div className="p-4">
          <h2 className="text-xl font-bold">{education.title}</h2>
          <p className="mb-4">{education.description}</p>
          <ul className="space-y-2">
            {education.items.map((item, index) => (
              <li
                key={index}
                className="p-2 border rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                <h3 className="font-semibold">{item.institution}</h3>
                <p>Degree/Position: {item.position}</p>
                <p>Duration: {item.duration}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (selectedCategory === "skills") {
      return (
        <div className="p-4">
          <h2 className="text-xl font-bold">{skills.title}</h2>
          <p className="mb-4">{skills.description}</p>
          <div className="grid grid-cols-2 gap-4">
            {skills.skillList.map((skill, index) => (
              <div
                key={index}
                className="flex items-center p-2 border rounded-lg bg-gray-100 dark:bg-gray-800"
              >
               
                 <div className="flex w-32 h-24">

                 <img src={skill.icon} alt="" />
                 </div>
              
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div name={"About"} className="min-h-[83vh] bg-gray-50 dark:bg-gray-800  dark:border-gray-700 mb-0 dark:text-white pt-80">
      <div className="container mx-auto ">
        {/* Sidebar */}
        <div className="flex gap-4">
          <div className="w-1/4">
            <button
              onClick={() => setSelectedCategory("experience")}
              className={`block w-full p-2 rounded-lg h-16 hover:h-24 duration-150 ${
                selectedCategory === "experience"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setSelectedCategory("about")}
              className={`block w-full p-2 mt-2 rounded-lg h-16 hover:h-24 duration-150 ${
                selectedCategory === "about"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => setSelectedCategory("education")}
              className={`block w-full p-2 mt-2 rounded-lg h-16 hover:h-24 duration-150 ${
                selectedCategory === "education"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setSelectedCategory("skills")}
              className={`block w-full p-2 mt-2 rounded-lg h-16 hover:h-24 duration-150 ${
                selectedCategory === "skills"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              Skills
            </button>
          </div>

          {/* Main Content */}
          <div className="w-3/4">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
