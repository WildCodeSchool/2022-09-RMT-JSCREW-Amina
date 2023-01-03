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

module.exports = { browse, read };
