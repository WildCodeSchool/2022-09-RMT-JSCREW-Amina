import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiConnexion from "@services/apiConnexion";
import { MultiSelect } from "react-multi-select-component";

function AddProject() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [langage, setLangage] = useState([]);
  const [librairie, setLibrairie] = useState([]);
  const [project, setProject] = useState({
    titre_projet: "",
    description_projet: "",
    language: [],
    date_debut: "",
    date_fin: "",
    url_image: "",
    url_github: "",
    url_site: "",
    Librairiecs_idLibrairiecs: "",
  });

  const getLangage = () => {
    apiConnexion
      .get(`/Langages`)
      .then((json) => {
        const langue = json.data.map((lg) => ({
          value: lg.idLanguage,
          label: lg.name,
        }));
        setLangage(langue);
      })
      .catch((err) => console.error(err));
  };

  const getLibrairie = () => {
    apiConnexion
      .get(`/librairie`)
      .then((json) => {
        setLibrairie(json.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getLangage();
    getLibrairie();
  }, []);

  const handleProject = (value, name) => {
    const newProject = { ...project };
    newProject[name] = value;
    setProject(newProject);
  };
  const postProject = () => {
    apiConnexion
      .post("/Project", { ...project })
      .then(() => {
        navigate("/ADMIN");
      })
      .catch((err) => {
        setMessage("Le projet n'a pas pu être ajouté");
        console.warn(err);
      });
  };

  const handleLangage = (selectedList) => {
    handleProject(selectedList, "language");
  };

  const sendForm = (e) => {
    e.preventDefault();
    postProject();
  };

  return (
    <div className="my-32 flex flex-col items-center">
      <form onSubmit={(e) => sendForm(e)}>
        <h2 className="text-white text-center text-2xl mb-7">
          Ajouter un nouveau projet
        </h2>
        <div className="flex bg-slate-200 flex-wrap justify-evenly w-[60%] gap-5 mb-4 mx-64 rounded">
          <label className="w-[40%] flex flex-col text-lg font-medium my-3">
            Intitulé du projet :
            <input
              required
              className="focus:outline-none bg-slate-300  p-2 rounded-xl text-gray-900 my-2"
              type="text"
              name="titre_projet"
              value={project.titre_projet}
              placeholder="  Titre du projet"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          {langage[0] && (
            <label className="w-[40%] flex flex-col text-lg my-2 font-medium">
              Langage(s) :
              <MultiSelect
                options={langage}
                value={project.language}
                onChange={handleLangage}
                labelledBy="Select"
              />
            </label>
          )}
          <label className="w-[40%] flex flex-col text-lg font-medium">
            Librairie css :
            <select
              required
              className="focus:outline-none bg-slate-300 p-2 rounded-xl text-gray-900 my-2"
              type="text"
              name="Librairiecs_idLibrairiecs"
              value={project.Librairiecs_idLibrairiecs}
              placeholder="  Librairie css"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            >
              <option className="text-gray-900 font-medium">
                Selectionner une librairie
              </option>
              {librairie.map((lib) => {
                return (
                  <option value={lib.idLibrairiecs} key={lib.idLibrairiecs}>
                    {lib.nom}
                  </option>
                );
              })}
            </select>
          </label>
          <label
            id="file-label"
            className="w-[40%] flex flex-col text-lg font-medium"
          >
            Image :
            <input
              required
              className="file-upload focus:outline-none bg-slate-300 p-2 rounded-xl  text-gray-900 my-2"
              type="text"
              name="url_image"
              value={project.url_image}
              placeholder="  image du projet"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-lg font-medium">
            Début du projet :
            <input
              required
              className="focus:outline-none bg-slate-300 p-2 rounded-xl  text-gray-900 my-2"
              type="date"
              name="date_debut"
              value={project.date_debut}
              placeholder="  Début du projet"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-lg font-medium">
            Fin du projet :
            <input
              required
              className="focus:outline-none bg-slate-300 p-2 rounded-xl text-gray-900 my-2"
              type="date"
              name="date_fin"
              value={project.date_fin}
              placeholder="  Fin du projet"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-lg font-medium">
            Lien github :
            <input
              required
              className="focus:outline-none bg-slate-300 p-2 rounded-xl text-gray-900 my-2"
              type="text"
              name="url_github"
              value={project.url_github}
              placeholder="  liens github"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
          <label className="w-[40%] flex flex-col text-lg font-medium">
            Lien du site :
            <input
              required
              className="focus:outline-none bg-slate-300 p-2 rounded-xl text-gray-900 my-2"
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
              className="focus:outline-none bg-slate-300 p-2 rounded-xl  text-gray-900 my-2"
              type="text"
              name="description_projet"
              value={project.description_projet}
              placeholder="description du projet"
              onChange={(e) => handleProject(e.target.value, e.target.name)}
            />
          </label>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex">
            <button
              type="button"
              className="text-white button-home rounded py-2 px-3 mx-5 my-3"
            >
              Annuler
            </button>
            <button
              className="text-white button-home rounded py-2 px-3 my-3"
              type="submit"
            >
              Ajouter
            </button>
          </div>
          <h3 className=" text-red-700">{message}</h3>
        </div>
      </form>
    </div>
  );
}

export default AddProject;
