const express = require('express');
const app = express();
const Routers = require('./Routers.js');

app.use('/',Routers)



app.listen(3000)