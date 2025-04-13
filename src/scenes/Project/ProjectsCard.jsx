/* eslint-disable react/prop-types */
import { FaEye } from "react-icons/fa";

const ProjectsCard = ({ project }) => {
  return (
    <div data-aos="fade-up" className="card bg-slate-900 shadow-xl text-white text-center p-6">
      
      {/* Image */}
      <figure className="mb-6">
        <img
          className="mx-auto w-full max-w-md max-h-64 object-cover rounded"
          src={project.image}
          alt={project.name}
        />
      </figure>

      {/* Text content */}
      <div className="space-y-4">

        <h2 className="text-2xl font-bold heading-color">{project.name}</h2>
        <h4>{project.key_features_heading}</h4>

        <ul className="list-disc list-inside text-sm space-y-2 text-justify px-4">
          {
            project.key_features.map(feature => (
              <li key={feature}>{feature}</li>
            ))
          }
        </ul>

        <p className="text-sm px-4 text-justify">
          <span className="font-semibold">Technology Used:</span> {project.technology}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 justify-center pt-4">
          <a className="sm-btn flex items-center" href={project.live_site} target="_blank" rel="noreferrer">
            <FaEye className="mr-1" /> Live Site
          </a>
          <a className="sm-btn" href={project.client_side} target="_blank" rel="noreferrer">
            Client Side
          </a>
          {
            project.server_side && (
              <a className="sm-btn" href={project.server_side} target="_blank" rel="noreferrer">
                Server Side
              </a>
            )
          }
        </div>

      </div>
    </div>
  );
};

export default ProjectsCard;
