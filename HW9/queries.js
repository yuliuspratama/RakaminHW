const { pool } = require("./config");
const respon = require("./models/Respon");
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken');
const rahasia = "inisuperrahasia"
const defLimit = 10;
const defPage = 1;


const getMovies = (req,resp) => {
    const response = new respon();
    const {limit, page} = req.query
    let relimit = limit ? limit : defLimit;
    let rePage = page? page : defPage;
    const query = `
    SELECT * 
    FROM movies 
    ORDER BY movies.id
    LIMIT ${relimit}
    OFFSET ${(rePage - 1) * relimit};
    `
    pool.query(query, (err,res,next)=>{
        if(err){
            next(err)
        }
        response.status= true;
        response.code= 200;
        response.message = "Berhasil"
        response.data = res.rows

        resp.status(200).json(response)
    })
}

const getUsers = (req,resp) => {
    const response = new respon();
    const {limit, page} = req.query
    let relimit = limit ? limit : defLimit;
    let rePage = page? page : defPage;
    const query = `
    SELECT * 
    FROM users 
    ORDER BY users.id
    LIMIT ${relimit}
    OFFSET ${(rePage - 1) * relimit};
    `
    pool.query(query, (err,res,next)=>{
        if(err){
            next(err)
        }
        response.status= true;
        response.code= 200;
        response.message = "Berhasil"
        response.data = res.rows

        resp.status(200).json(response)
    })
}

const getMoviesByid = (req,resp,next) => {
    const response = new respon();
    const {id} = req.params;
    pool.query({text : 'SELECT * FROM movies WHERE id = $1 ', values : [id]},(err , res)=>{
        if(err){
            next(err)
        }
        if (res.rowCount == 0) {
            next({name : "notFound"})
        } else 
        {
        response.status= true;
        response.code= 200;
        response.message = "Berhasil"
        response.data = res.rows

        resp.status(200).json(response)
        }

        
    })
    
}

const getUserByid = (req,resp,next) => {
    const response = new respon();
    const {id} = req.params;
    console.log(req.params)
    pool.query({text : 'SELECT * FROM users WHERE id = $1 ', values : [id]},(err , res)=>{
        if(err){
            next(err)
        }
        if (res.rowCount == 0) {
            next({name : "notFound"})
        } else 
        {
        response.status= true;
        response.code= 200;
        response.message = "Berhasil"
        response.data = res.rows

        resp.status(200).json(response)
        }

        
    })
    
}

const updateMovie = (req,resp) => {
    const response = new respon();
    
    const query = `
    UPDATE movies 
        SET title = $1, genres = $2, year = $3
            WHERE id = $4
    `
    try {
    const {title,genres,year,id} = req.body;
    pool.query(query,[title,genres,year,id],(err , res)=>{
        if(err) 
            throw{
                err
            }
            response.status = true;
            response.code = 200;
            response.message = "Movies modification successed";
            response.data = null;
            resp.status(200).send(response);
            })
            
        } catch (err) {
            response.status = false;
            response.code = 500;
            response.message = error.message;
            response.data = null
            resp.status(500).json(response);
        }
}

const updateUser = (req,resp) => {
    const response = new respon();
    
    const query = `
    UPDATE users 
        SET email = $1, gender = $2, password = $3, role = $4
            WHERE id = $5
    `
    try {
    const {id,email, gender, password , role} = req.body;
    const hash = bcrypt.hashSync(password,salt)
    pool.query(query,[email, gender, hash , role,id],(err , res)=>{
        if(err) 
            throw{
                err
            }
            response.status = true;
            response.code = 200;
            response.message = "User modification successed";
            response.data = null;
            resp.status(200).send(response);
            })
            
        } catch (err) {
            response.status = false;
            response.code = 500;
            response.message = error.message;
            response.data = null
            resp.status(500).json(response);
        }
}

const createMovie = (req,resp) => {
    const response = new respon();
    const query = `
    INSERT INTO movies (id,title, genres, year)
        VALUES
            ((SELECT MAX(id)+1 FROM movies),$1, $2, $3)
    `
    const {title,genres,year} = req.body;
    if(!title ||
        !genres ||
        !year.toString().match(/^[0-9]{4}$/g)
        ){
            resp.status(400).json({message : "Bad request"}) 
        }else {
    pool.query(query,[title,genres,year],(err , res)=>{
        if(err) 
            throw{
                err
            }

    resp.status(201).json({message :"Movies Added"})
})
        }
}

const createUser = (req,resp) => {
    const response = new respon();
    const query = `
    INSERT INTO users (id,email, gender, password , role)
        VALUES
            ((SELECT MAX(id)+1 FROM movies),$1, $2, $3 ,$4)
    `
    const {email, gender, password , role} = req.body;
    pool.query(query,[email, gender, password , role],(err , res)=>{
        if(err) 
            throw{
                err
            }

    resp.status(201).json({message :"Users Added"})
})
}
const register = (req,resp,next) => {
    console.log(req.body)
    const response = new respon();
    const query = `
    INSERT INTO users (id,email, gender, password , role)
        VALUES
            ((SELECT MAX(id)+1 FROM users),$1, $2, $3 ,$4);
    `
    const {email, gender, password , role} = req.body;
    if( (email == null) || (gender == null) || (password == null) || (role ==null) ){
        next({name : "InputSalah"})
    }
    const hash = bcrypt.hashSync(password,salt)
    console.log(hash)
    pool.query(query,[email, gender, hash , role],(err , res)=>{
        if(err) 
            next (err)
        else{
            resp.status(201).json({message :"Registered"})
        }
   
})
}

const login = (req,resp,next) =>{
    const {email, password } = req.body;
    const query = `
    SELECT * FROM users WHERE email = $1
    `
    pool.query(query,[email],(err,res)=>{
        if(err) next(err)

        if(res.rows.length === 0){
            next({name : "notFound"})
        } else {
            const data = res.rows[0]
            const compare  = bcrypt.compareSync(password,data.password)
            if(compare){
                const aksestoken = jwt.sign(
                  {  id : data.id,
                    email : data.email,
                    gender : data.gender,
                    role : data.role}
                ,rahasia)
                resp.status(200).json(
                   { id : data.id,
                    email : data.email,
                    gender : data.gender,
                    role : data.role,
                    aksestoken : aksestoken}
                )
            } else{
                next({name : "salahPassword"})
            }
        

        }
    })
}

const deleteMovie = (req,resp) => {
    const response = new respon();
    const {id} = req.body;
    const query = `
    DELETE FROM movies WHERE id = $1
    `
    pool.query(query,[id],(err , res)=>{
        if(err) 
            throw{
                err
            }

    resp.status(201).json("Movies Deleted")
})
}

const deleteUser = (req,resp) => {
    const response = new respon();
    const {id} = req.body;
    const query = `
    DELETE FROM users WHERE id = $1
    `
    pool.query(query,[id],(err , res)=>{
        if(err) 
            throw{
                err
            }

    resp.status(201).json("users Deleted")
})
}





module.exports = {pool,
                login , 
                getMovies ,
                getMoviesByid,
                createMovie,
                deleteMovie,
                updateMovie,
                getUsers,
                getUserByid,
                createUser,
                deleteUser,
                updateUser,
                register }
