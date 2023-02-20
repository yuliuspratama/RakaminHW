const fs = require('fs');
const pool = require('../queries');

const seddquery = fs.readFileSync('db/sedding.sql',{encoding:'utf-8'})
pool.query(seddquery,(err,res)=> {
    if (!err){
        console.log('seeding berhasil');
        pool.end()
    }else console.log(err);
    
})