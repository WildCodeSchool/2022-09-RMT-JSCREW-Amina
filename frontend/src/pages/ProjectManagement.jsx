import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiConnexion from "@services/apiConnexion";
import ProjectCardAdmin from "@components/ProjectCardAdmin";

function ProjectManagement() {
  const [projectList, setProjectList] = useState([]);
  const [project, setProject] = useState({
    titre_projet: "",
    description_projet: "",
    date_debut: "",
    date_fin: "",
    url_image: "",
    url_github: "",
    url_site: "",
    Librairiecs_idLibrairiecs: "",
    archive: "",
    user_iduser: "",
  });
  console.warn(project);
  const getAllProjects = () => {
    apiConnexion
      .get(`/Project`)
      .then((res) => {
        setProjectList(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteProject = (idprojet) => {
    apiConnexion
      .delete(`/Project/${idprojet}`)
      .then(() => {
        setProject({
          idprojet: "",
          titre_projet: "",
          description_projet: "",
          date_debut: "",
          date_fin: "",
          url_image: "",
          url_github: "",
          url_site: "",
          Librairiecs_idLibrairiecs: "",
          archive: "",
          user_iduser: "",
        });
        getAllProjects();
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getAllProjects();
  }, []);
  return (
    <div>
      <h1 className="text-white text-center font-semibold text-2xl pt-8 mt-16">
        Gestion des projets
      </h1>
      <div className="flex justify-center my-1">
        <Link
          to="/ajouter-projet"
          className="button-home rounded px-6 py-2 text-white my-4"
        >
          Ajouter un projet
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 my-26 py-26 mx-10 sm:hidden md:grid min-[320px]:hidden ">
        {projectList.map((proj, index) => (
          <ProjectCardAdmin
            proj={proj}
            index={index}
            handleDeleteProject={handleDeleteProject}
          />
        ))}
        ;
      </div>
    </div>
  );
}
export default ProjectManagement;
