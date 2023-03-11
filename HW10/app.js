const express = require('express');
const router = require('./routes/router');
const erorHandler = require('./middleware/errorHandler.js');
const port = 3000;
const app = express();
const upload = require('./upload');

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(upload);
app.use(router)
app.use(erorHandler)

app.listen(port,()=>{
    console.log(`Running`)
})