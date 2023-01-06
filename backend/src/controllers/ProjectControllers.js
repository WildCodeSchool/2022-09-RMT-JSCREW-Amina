const models = require("../models");

const browse = (req, res) => {
  models.projet
    .findAll()
    .then(([projets]) => {
      res.send(projets);
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
    .then(([result]) => {
      res.location(`/PORTFOLIO/${result.insertId}`).sendStatus(201);
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
