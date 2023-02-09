const models = require("../models");

const browse = (req, res) => {
  // 1er Récupérer l'ensemble des projets
  models.projet
    .findAll()
    .then(async ([projets]) => {
      // 2ème pour Chaque projets (Boucle), il faut récupérer ses languages
      const languageByProject = await Promise.all(
        projets.map((projet) =>
          models.projet_language.findAllByID(projet.idprojet)
        )
      );

      // 3ème Associer les tableaux de languages à leurs projets

      res.status(200).json(
        projets.map((projet, index) => ({
          ...projet,
          language: languageByProject[index][0],
        }))
      );
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const read = (req, res) => {
  models.projet
    .find(req.params.id)
    .then(([projets]) => {
      if (projets[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(projets[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const projet = req.body;
  models.projet
    .insert(projet)
    .then(([proj]) => {
      models.projet_language
        .insert(proj.insertId, projet.language)
        .then(() => {
          res.location(`/PORTFOLIO/${proj.insertId}`).sendStatus(201);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.projet
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { browse, read, add, destroy };

/**
 * [
 * ['JS', 'PHP],
 * ['Sass', JS, RE]
 * ]
 */
