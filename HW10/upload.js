const express = require('express')
const multer = require('multer')
const path = require('path');
const pool = require('./config/connect');
const router = express.Router();


const store = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,path.join(__dirname,"./upload"))
    },
    filename : (req,file,cb) => {
        const suffixunik = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
        cb(null,file.fieldname + '-' + suffixunik)
    }
})

router.use("/upload",express.static(path.join(__dirname , "upload")))

router.post("/upload/:id/image",
    multer({storage: store}).single('image'),
    (req,resp) => {
        const file = req.file.path
        const id = req.params.id
        if(!file){
            res.status(400).json({message: "File not found"
        })
        } else{
            
            const updateurl = `
                UPDATE movies 
                SET photo = $1 
                WHERE id = $2;
            ` 

            const url = `http://localhost:3000/upload/${req.file.filename}`
            console.log(file)
            pool.query(updateurl, [url ,id], (err ,res) => {
                if(err){
                    throw err
                } else {
                    resp.status(200).json({message: url})
                }
            })

            
        }
        
    }
)




module.exports = router