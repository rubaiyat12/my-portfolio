import { useEffect, useState } from "react";
import "./Projects.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProjectsCard from "./ProjectsCard";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedProjects = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setProjects(sortedProjects);
      });
  }, []);

  const mernStackProject = projects.filter((p) => p.type === "mern-stack");
  const frontEndProject = projects.filter((p) => p.type === "front-end");
  const vanillaJsProject = projects.filter((p) => p.type === "vanilla");
  const professionalProjects = projects.filter(
    (p) => p.type === "professional"
  );

  return (
    <section id="projects" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="font-playfair font-semibold text-center text-4xl mb-4 text-white">
          FEATURED PROJECTS
        </h2>

        <p className="max-w-3xl mx-auto text-sm text-center text-gray-300">
          This section includes academic, personal, and professional projects.
          The professional projects highlight real-world industry experience,
          where I contributed to UX improvements, system flows, and frontend and
          backend development.
        </p>
      </motion.div>

      <div className="lg:px-10 lg:mt-14 pt-6">
        <Tabs>
          <div className="px-6 mx-auto text-sm text-white font-semibold text-center">
            <TabList>
              <Tab>Professional Projects</Tab>
              <Tab>Full Stack</Tab>
              <Tab>Front-End</Tab>
              <Tab>Vanilla JavaScript</Tab>
            </TabList>
          </div>
          {/* PROFESSIONAL ONLY */}
          <TabPanel>
            <div className="grid grid-cols-1 px-10 pt-10 gap-14">
              {professionalProjects.map((project) => (
                <ProjectsCard key={project._id} project={project} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 px-10 pt-10 gap-14">
              {mernStackProject.map((project) => (
                <ProjectsCard key={project._id} project={project} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 px-10 pt-10 gap-14">
              {frontEndProject.map((project) => (
                <ProjectsCard key={project._id} project={project} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 px-10 pt-10 gap-14">
              {vanillaJsProject.map((project) => (
                <ProjectsCard key={project._id} project={project} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
