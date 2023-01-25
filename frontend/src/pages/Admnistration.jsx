import React, { useState } from "react";
import apiConnexion from "@services/apiConnexion";

function Admnistration() {
  const [project, setProject] = useState({
    titre_projet: "",
    description_projet: "",
    language: "",
    nom: "",
    date_debut: "",
    date_fin: "",
    url_image: "",
    url_github: "",
    url_site: "",
    archive: "",
  });
  const [message, setMessage] = useState("");
  const handleProject = (name, value) => {
    const newProject = { ...project };
    newProject[name] = value;
    setProject(newProject);
  };
  const sendForm = (event) => {
    event.preventDefault();
    apiConnexion
      .post("/Project", { ...project })
      .then(() => {
        setMessage("Message succesfully sent");
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div className="my-36 flex flex-col items-center">
      <h1 className="text-white text-center text-3xl mb-4">Administration</h1>
      <form onSubmit={(e) => sendForm(e)}>
        <h2 className="text-white text-center text-2xl mb-5">
          Ajouter un nouveau projet
        </h2>
        <div className="flex bg-slate-200 flex-wrap justify-evenly w-[60%] gap-5 mb-4 mx-10 rounded">
          <label className="w-[40%] flex flex-col text-xl font-medium my-3">
            Intitulé du projet :
            <input
              required
              className="focus:outline-none bg-slate-300  p-2 rounded-3xl text-gray-900 my-3"
              type="text"
              name="titre_projet"
              value={project.titre_projet}
              placeholder="  Titre du projet"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-xl my-3 font-medium">
            Langage :
            <input
              required
              className="focus:outline-none bg-slate-300 p-2 rounded-3xl my-3  text-gray-900"
              type="text"
              name="langage"
              value={project.language}
              placeholder="  Langages utilisés"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-xl font-medium">
            Librairie css :
            <input
              required
              className=" focus:outline-none bg-slate-300 p-2 rounded-3xl text-gray-900 my-3"
              type="text"
              name="librairie_css"
              value={project.nom}
              placeholder="  Librairie css"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-xl font-medium">
            Début du projet :
            <input
              required
              className="focus:outline-none bg-slate-300 p-2 rounded-3xl  text-gray-900 my-3"
              type="text"
              name="date_debut"
              value={project.date_debut}
              placeholder="  Début du projet"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-xl font-medium">
            Fin du projet :
            <input
              required
              className="focus:outline-none bg-slate-300 p-2 rounded-3xl text-gray-900 my-3"
              type="text"
              name="date_fin"
              value={project.date_fin}
              placeholder="  Fin du projet"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-xl font-medium">
            image :
            <input
              required
              className="focus:outline-none bg-slate-300 p-2 rounded-3xl  text-gray-900 my-3"
              type="text"
              name="url_image"
              value={project.url_image}
              placeholder="  image du projet"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-xl font-medium">
            lien github :
            <input
              required
              className="focus:outline-none bg-slate-300 p-2 rounded-3xl text-gray-900 my-3"
              type="text"
              name="url_github"
              value={project.url_github}
              placeholder="  liens github"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-xl font-medium">
            lien du site :
            <input
              required
              className="focus:outline-none bg-slate-300 p-2 rounded-3xl text-gray-900 my-3"
              type="text"
              name="url_site"
              value={project.url_site}
              placeholder="  lien du site"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
          <label className="w-[90%] flex flex-col text-xl font-medium">
            Description :
            <textarea
              required
              className="focus:outline-none bg-slate-300 p-2 rounded-3xl  text-gray-900 my-3"
              type="text"
              name="description_projet"
              value={project.description_projet}
              placeholder="description du projet"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="text-white button-home rounded py-2 px-3"
            type="submit"
          >
            Envoyer
          </button>
          <h3 className=" text-red-700">{message}</h3>
        </div>
      </form>
    </div>
  );
}

export default Admnistration;
