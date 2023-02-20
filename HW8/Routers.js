const express = require('express');
const router = express.Router();
const pool = require('./queries');

router.get('/infoActor',function(req,res){
    pool.query('SELECT * FROM actor_info',(err , rest)=>{
        if(err){
            throw err
        }
        res.send(rest)
    })
})

router.get('/film',function(req,res){
    pool.query('SELECT * FROM film',(err , rest)=>{
        if(err){
            throw err
        }
        res.send(rest)
    })
})
router.get('/film/:id',function(req,res){
    pool.query('SELECT * FROM film WHERE film_id =' + req.params.id ,(err , rest)=>{
        if(err){
            throw err
        }
        res.send(rest)
    })
})
router.get('/film/category/:category',function(req,res){
    pool.query("SELECT * FROM film_list WHERE category  = '" + req.params.category +"'" ,(err , rest)=>{
        if(err){
            throw err
        }
        res.send(rest)
    })
})

router.get('/film/category/',function(req,res){
    pool.query('SELECT * FROM category',(err , rest)=>{
        if(err){
            throw err
        }
        res.send(rest)
    })
})


router.get('/',function(req,res){
    res.send('Get');
})

router.post('/',function(req,res){
    res.send('post');
})

module.exports = router