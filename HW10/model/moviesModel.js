const pool = require("../config/connect.js")


class Movies{

    static showAll = async (next) => {

    let query = `SELECT * FROM movies;`
        try {
            const data = await pool.query(query);
            return data.rows
            
        } catch (err) {
            next(err);
        }
    }

    static getById = async (id,next) => {
    let query = `SELECT * FROM movies WHERE id = $1 ;`
        try {
            const data = await pool.query(query,[id]);
            if(data.rows.length === 0){
                next({name : "notFound"})
            } else
            {
            return data.rows
        }
            
        } catch (err) {
            next(err);
        }
    }

    static updateMovie = async (id,params,next) => {
        const {title,genres,year} = params
    let query = `    
        UPDATE movies 
        SET title = $1, genres = $2, year = $3
        WHERE id = $4;`
        try {
            const data = await pool.query(query,[title,genres,year,id]);
            return data.rows
            
        } catch (err) {
            next(err);
        }
    }

    static createMovie = async (params,next) => {
        const {title,genres,year} = params
    let query = `    
    INSERT INTO movies (id,title, genres, year)
    VALUES
        ((SELECT MAX(id)+1 FROM movies),$1, $2, $3)
`
        try {
            const data = await pool.query(query,[title,genres,year]);
            return data.rows
            
        } catch (err) {
            next(err);
        }
    }

    static deleteMovie = async (params,next) => {
        const {id} = params
    let query = `    
    DELETE FROM movies WHERE id = $1
    `
        try {
            const data = await pool.query(query,[id]);
            return data.rows
            
        } catch (err) {
            next(err);
        }
    }

   
}

module.exports = Movies;