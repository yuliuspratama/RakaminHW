const express = require('express');
const router = express.Router();
const pool = require('./queries');

router.get('/infoActor',function(req,res){
    pool.query('SELECT * FROM actor_info',(err , rest)=>{
        if(err){
            throw err
        }
        res.status(200).json(rest.rows)
    })
})

router.get('/film',function(req,res){
    pool.query('SELECT * FROM film',(err , rest)=>{
        if(err){
            throw err
        }
        res.status(200).json(rest.rows)
    })
})
router.get('/film/id/:id',function(req,res){
    const{id} = req.params;
    pool.query({text: 'SELECT * FROM film WHERE film_id = $1',values: [id]},(err , rest)=>{
        if(err){
            throw err
        }
        res.status(200).json(rest.rows)
    })
})
router.get('/film/category/:category',function(req,res){
    const{category} = req.params;
    pool.query({text: "SELECT * FROM film_list WHERE category  = $1", values : [category]} ,(err , rest)=>{
        if(err){
            throw err
        }
        res.status(200).json(rest.rows)
    })
})

router.get('/film/category/',function(req,res){
    pool.query('SELECT * FROM category',(err , rest)=>{
        if(err){
            throw err
        }
        res.status(200).json(rest.rows)
    })
})

let pesanIndex = '<div><ul><li><a href="/film" >List Film</a></li><li><a href="/film/id/1" >Film ID 1 </a></li><li><a> ID film dapat di ubah secara manual dengan mengubah angka pada url </a></li><li><a href="/film/category/" >List category</a></li><li><a href="/film/category/Action" >Category Action</a></li><li><a>Category Action  dapat diaganti kategori lain pada URL</a></li><li><a href="/infoActor/" >List infoActor</a></li></ul></div>'

router.get('/',function(req,res){
    res.send(pesanIndex);
})

module.exports = router