const express = require("express");
const userRout = express.Router();
const usersControler = require("../controllers/usersController");

userRout.use(express.json());

userRout.get("/users", usersControler.showAll)
userRout.get("/users/:id", usersControler.getById)
userRout.post("/users/:id", usersControler.postUpdate)
userRout.post("/users", usersControler.postCreate)
userRout.delete("/users", usersControler.delete)

userRout.use(express.json());



module.exports = userRout