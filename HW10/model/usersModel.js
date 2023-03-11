const pool = require("../config/connect.js")


class Users{

    static showAll = async (next) => {

    let query = `SELECT * FROM users;`
        try {
            const data = await pool.query(query);
            return data.rows
            
        } catch (err) {
            next(err);
        }
    }

    static getById = async (id,next) => {
    let query = `SELECT * FROM users WHERE id = $1 ;`
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

    static update = async (id,params,next) => {
        const {email, gender, password , role} = params
    let query = `    
    UPDATE users 
        SET email = $1, gender = $2, password = $3, role = $4
            WHERE id = $5;`
        try {
            const data = await pool.query(query,[email, gender, password , role,id]);
            return data.rows
            
        } catch (err) {
            next(err);
        }
    }

    static create = async (params,next) => {
        const {email, gender, password , role} = params
    let query = `    
    INSERT INTO users (id,email, gender, password , role)
        VALUES
            ((SELECT MAX(id)+1 FROM users),$1, $2, $3 ,$4)
`
        try {
            const data = await pool.query(query,[email, gender, password , role]);
            return data.rows
            
        } catch (err) {
            next(err);
        }
    }

    static delete = async (params,next) => {
        const {id} = params
    let query = `    
    DELETE FROM users WHERE id = $1
    `
        try {
            const data = await pool.query(query,[id]);
            return data.rows
            
        } catch (err) {
            next(err);
        }
    }

   
}

module.exports = Users;