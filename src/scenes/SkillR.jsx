// SkillAccordionFull.jsx
import { useState } from "react";
import {
  FaFigma,
  FaUserAlt,
  FaPencilRuler,
  FaTasks,
  FaUniversalAccess,
  FaDesktop,
  FaVrCardboard,
  FaServer,
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJsonwebtokens,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const skillsData = [
  {
    category: "Design & UX Skills",
    skills: [
      { name: "Figma", icon: FaFigma },
      { name: "User Research", icon: FaUserAlt },
      { name: "Wireframing & Prototyping", icon: FaPencilRuler },
      { name: "Usability Testing", icon: FaTasks },
      { name: "Accessibility Design", icon: FaUniversalAccess },
      { name: "Interaction Design", icon: FaDesktop },
    ],
  },
  {
    category: "Front-End Implementation",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript (ES6)", icon: SiJavascript },
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    category: "Backend Technology",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "REST APIs", icon: FaServer },
    ],
  },
  {
    category: "Virtual & Augmented Reality",
    skills: [
      { name: "VR/AR Design", icon: FaVrCardboard },
      { name: "3D Interaction Design", icon: FaDesktop },
    ],
  },
 
];

const SkillAccordionFull = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCategory = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div id="skills" className="lg:mt-14 lg:px-10">
      {/* Heading */}
       <h2 className="font-playfair font-semibold   text-center  text-4xl mb-10 text-white">
        Skills and Expertise
      </h2>

      {skillsData.map((categoryData, index) => (
        <div
          key={categoryData.category}
          className="mb-6 rounded-lg overflow-hidden shadow-lg"
        >
          {/* Category Header */}
          <button
            onClick={() => toggleCategory(index)}
            className="w-full flex justify-between items-center p-4 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 font-semibold text-lg"
          >
            {categoryData.category}
            {openIndex === index ? (
              <IoIosArrowUp size={24} color="currentColor" />
            ) : (
              <IoIosArrowDown size={24} color="currentColor" />
            )}
          </button>

          {/* Skills List */}
          <div
            className={`transition-all duration-500 overflow-hidden ${
              openIndex === index ? "max-h-[2000px] p-6" : "max-h-0 p-0"
            }`}
          >
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {categoryData.skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <li
                    key={skill.name}
                    className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-md transform transition-all duration-300
                      hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                      hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-400 text-gray-900 bg-white`}
                    tabIndex={0}
                  >
                    <div className="text-5xl mb-3">
                      <IconComponent color="currentColor" />
                    </div>
                    <p className="font-semibold text-center">{skill.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillAccordionFull;
