const express = require('express');
const Routers = require('./routes/index.js');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const morgan = require('morgan');
const { options } = require('./config.js');
const erorHandler = require('./middleware/errorhandler.js');
const { authentication } = require('./middleware/auth.js');
const regislogin = require('./routes/regislogin.js');
const port = 3000
const app = express();

app.use(morgan('dev'));
const specs = swaggerJsdoc(options);


app.use('/api-doc',swaggerUI.serve, swaggerUI.setup(specs))
app.use(regislogin)
app.use(authentication)
app.use(Routers)
app.use(erorHandler)



app.listen(port,()=>{
    console.log(`listen port ${port}`)
})