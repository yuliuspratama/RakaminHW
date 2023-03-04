const jwt = require('jsonwebtoken');
const { pool } = require('../config');
const rahasia = "inisuperrahasia"

function authentication(req,res,next){
    const {aksestoken} = req.headers

    if (aksestoken){
        try {
            const dekode = jwt.verify(aksestoken,rahasia);
            const {id, email,role} = dekode
            const query = `
                SELECT
                    *
                FROM users
                WHERE id = $1
            `
            pool.query(query,[id],(err,res)=>{
                if(err) next(err)

                if(res.rows.length === 0){
                    next({name : "notFound"})
                }else{
                    const user = res.rows[0]

                    req.loginedUser = {
                        id: user.id,
                        email: user.email,
                        role: user.role
                    }
                    next();
                }
            })
            // console.log(dekode)
            // res.status(400).json(dekode)
            

        }catch(err){
            next({name : "JWTErr"})
        }
    } else{
        next({name : "Unauth"})
    }
}
function authorization(req,res,next){
    console.log(req.loginedUser)
    const {id , email ,role} = req.loginedUser

    if(role == "Supervisor" || role == "Admin" || role == "Engineer" || role == "admin"){
        next()
    } else{
        next({name : "Unauthorization"})
    }
}

module.exports = {
    authentication,
    authorization
}