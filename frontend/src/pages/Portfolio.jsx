import React, { useState, useEffect } from "react";
import apiConnexion from "@services/apiConnexion";
import ProjectCard from "@components/ProjectCard";
import Carousel from "@components/Carousel/Carousel";

function Portfolio() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    apiConnexion
      .get(`/Project`)
      .then((json) => setProject(json.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 my-30 py-32 mx-10 sm:hidden md:grid min-[320px]:hidden ">
        {project.map((proj, index) => (
          <ProjectCard proj={proj} index={index} />
        ))}
        ;
      </div>
      <Carousel />
    </div>
  );
}

export default Portfolio;
