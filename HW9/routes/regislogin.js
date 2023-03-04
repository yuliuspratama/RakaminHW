const { register, login } = require("../queries");
const express = require('express');
const regislogin = express.Router();
regislogin.use(express.json());
regislogin.post('/Register/',register)
regislogin.post('/Login/',login)

module.exports = regislogin ;