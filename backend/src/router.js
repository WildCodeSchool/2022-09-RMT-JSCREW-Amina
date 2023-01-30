const express = require("express");
const ProjectControllers = require("./controllers/ProjectControllers");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const mailControllers = require("./controllers/mailControllers");

const LangageControllers = require("./controllers/LangageControllers");

const LibrairieControllers = require("./controllers/LibrairieControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/Project", ProjectControllers.browse);
router.get("/Project/:id", ProjectControllers.read);
router.post("/Project", ProjectControllers.add);
router.delete("/Project/:id", ProjectControllers.destroy);
router.post("/sendEmail", mailControllers.sendEmail);
router.get("/Langages", LangageControllers.browse);
router.get("/librairie", LibrairieControllers.browse);

module.exports = router;
