import { useEffect, useState } from "react";
import './Projects.css'
import SectionTitle from "../../Shared/SectionTitle";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProjectsCard from "./ProjectsCard";
import 'react-tabs/style/react-tabs.css';

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                const sortedProjects = data.sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateB - dateA; // Sort in descending order
                  });
                  setProjects(sortedProjects);
            })
    }, [])
  
    const mernStackProject = projects.filter(pf => pf.type === 'mern-stack')
    const frontEndProject = projects.filter(pf => pf.type === 'front-end')
    const domProject = projects.filter(pf => pf.type === 'dom')
   
  


    return (
        <section id="projects" className="pt-32 pb-16">
        <div className="lg:px-10 lg:mt-14">
            
            <SectionTitle heading={"Projects"}></SectionTitle>

            <div className='pt-4'>

                <Tabs>
                    <div className=' px-6   md:p-0 mx-auto text-sm text-white font-semibold text-center'>
                        <TabList  >
                            <Tab>Full Stack (MERN)</Tab>
                            <Tab>Front-End (React)</Tab>
                           
                            <Tab>Dom</Tab>
                            <Tab>All</Tab>
                         
                        </TabList>
                    </div>




                    <TabPanel>

                        <div className="grid grid-cols-1 px-10 pt-10 gap-14">
                            {
                                mernStackProject && mernStackProject.map((project) => <ProjectsCard key={project._id} project={project}></ProjectsCard>)
                            }
                        </div>

                    </TabPanel>
                  
                    <TabPanel>

                        <div className="grid grid-cols-1 px-10 pt-10 gap-14">
                            {
                                frontEndProject && frontEndProject.map((project) => <ProjectsCard key={project._id} project={project}></ProjectsCard>)
                            }
                        </div>

                    </TabPanel>
                    
                   

                    
                    <TabPanel>

                        <div className="grid grid-cols-1 px-10 pt-10  gap-14">
                            {
                                domProject && domProject.map((project) => <ProjectsCard key={project._id} project={project}></ProjectsCard>)
                            }
                        </div>

                    </TabPanel>


                    
                    <TabPanel>

                        <div className="grid grid-cols-1 px-10 pt-10  gap-14">
                            {
                                projects && projects.map((project) => <ProjectsCard key={project._id} project={project}></ProjectsCard>)
                            }
                        </div>
                    </TabPanel>
                
                
                </Tabs>

            </div>

        </div>
        </section>
    );
};

export default Projects;