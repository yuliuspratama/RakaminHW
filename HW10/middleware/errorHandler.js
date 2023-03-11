const respon = require("../Respon");


function erorHandler (err,req,res,next) {
    const response = new respon
    if (err.name === "notFound"){
        response.status = true;
        response.code = 404;
        response.message = "Data Not found";
        response.data = null;
        res.json(response)
    } else if (err.name === "salahPassword"){
        response.status = true;
        response.code = 400;
        response.message = "Password Salah";
        response.data = null;

        res.status(400).json(response)
    }else if (err.name === "InputSalah"){
        response.status = true;
        response.code = 400;
        response.message = "Masukkan Input yang Benar";
        response.data = {};

        res.status(400).json(response)
    }else if (err.name === "JWTErr"){
        response.status = true;
        response.code = 400;
        response.message = "Akses Token Salah ";
        response.data = null;
        res.status(400).json(response)
    }else if (err.name === "Unauthorization"){
        response.status = true;
        response.code = 401;
        response.message = "Kamu Tidak ada akses ";
        response.data = null;

        res.status(401).json(response)
    }
     else if (err.name === "Unauth"){
        response.status = true;
        response.code = 400;
        response.message = "Belum Login";
        response.data = null;

        res.status(400).json(response)
    } 
    else {
        response.status= true;
        response.code= 500;
        response.message = "Internal Error"

        res.status(500).json(response)
    }
    console.log(err)
}

module.exports = erorHandler;