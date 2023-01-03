const express = require("express");
const ProjectControllers = require("./controllers/ProjectControllers");
const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/PORTFOLIO", ProjectControllers.browse);
router.get("/PORTFOLIO/:id", ProjectControllers.read);
module.exports = router;
