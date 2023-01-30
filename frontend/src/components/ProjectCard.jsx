import React from "react";

function ProjectCard({ proj }) {
  return (
    <div className="text-white">
      <div className="shadow-md shadow-gray-600 rounded-lg">
        <img
          className="rounded-md duration-200 hover:scale-105"
          src={`${import.meta.env.VITE_BACKEND_URL}/${proj.url_image}`}
          alt={`${import.meta.env.VITE_BACKEND_URL}/${proj.titre_projet}`}
        />
        <div className="flex items-center justify-center">
          <a
            className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
            href={proj.url_site}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
          <a
            className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
            href={proj.url_github}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
