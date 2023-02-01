import React from "react";
import { Link } from "react-router-dom";

function ProjectCardAdmin({ proj, handleDeleteProject }) {
  return (
    <div className="text-white">
      <div className="shadow-md shadow-gray-600 rounded-lg">
        <img
          className="rounded-md duration-200 hover:scale-105"
          src={`${import.meta.env.VITE_BACKEND_URL}/${proj.url_image}`}
          alt={`${import.meta.env.VITE_BACKEND_URL}/${proj.titre_projet}`}
        />
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="button-home w-1/4 px-6 py-3 m-4 duration-200 hover:scale-105 rounded"
            onClick={() => handleDeleteProject(proj.idprojet)}
          >
            Supprimer
          </button>
          <Link
            to="/modifier-projet"
            className="button-home w-1/4 px-6 py-3 m-4 duration-200 hover:scale-105 rounded"
          >
            Modifier
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardAdmin;