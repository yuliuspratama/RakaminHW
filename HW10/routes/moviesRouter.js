const express = require("express");
const moviesRout = express.Router();
const moviesControler = require("../controllers/moviesController");

moviesRout.use(express.json());

moviesRout.get("/movies", moviesControler.showAll)
moviesRout.get("/movies/:id", moviesControler.getById)
moviesRout.post("/movies/:id", moviesControler.postUpdate)
moviesRout.post("/movies", moviesControler.postCreate)
moviesRout.delete("/movies", moviesControler.delete)


module.exports = moviesRout