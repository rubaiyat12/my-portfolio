/* eslint-disable react/prop-types */

import { FaEye } from "react-icons/fa";

const ProjectsCard = ({ project }) => {
    return (
        <div data-aos="fade-up" className="card rounded-sm lg:card-side bg-slate-900 shadow-xl ">
            <figure><img className="w-full  md:h-full" src={project.image} alt="Album" /></figure>
            <div className="card-body  text-white md:h-[400px] pt-10">

                <h2 className="card-title heading-color">{project.name}</h2>

                <h4 className="text-justify">{project.key_features_heading}</h4>

                <ul className="mt-4  lg:w-[800px] w-full text-sm space-y-4 text-justify">
                    {
                        project.key_features.map(feature => <li className="list-disc text-sm mx-6" key={feature}>{feature}</li>)
                    }
                </ul>

                <div className="mt-4">

                    <p className="lg:w-[800px] w-full text-sm text-justify"><span className="font-semibold ">Technology Used:</span> {project.technology}</p>
                </div>
                <p>

                </p>


                <div className="card-actions gap-5 flex pt-8  justify-end">
                    <a className="flex sm-btn items-center" href={project.live_site} target="_blank"><FaEye className="me-1"></FaEye> live site</a>
                    <a className="sm-btn" href={project.client_side} target="_blank">Client Side</a>
                    {
                        project.server_side && <a className="sm-btn" href={project.server_side} target="_blank">Server Side</a>
                    }
                    


                </div>
            </div>


        </div>

    );
};

export default ProjectsCard;