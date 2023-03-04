const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database : 'MoviesDB',
    password : '1234',
    port : '5432',
})

const options = {
    definition:{
        openapi: '3.0.0',
        info:{
            title :'',
            version:'',
            description:
                '',
        },
        servers: [
            {
                url: 'http://127.0.0.1:3000',
            },
        ],
    },
    apis: ['Doc.yml']
};

module.exports = {pool , options}