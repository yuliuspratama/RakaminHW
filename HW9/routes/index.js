const { request } = require('express');
const express = require('express');
const router = express.Router();
const {getMovies, getMoviesByid, createMovie, deleteMovie, updateMovie, getUsers, getUserByid, createUser, deleteUser, updateUser} = require('../queries');
const { authorization } = require('../middleware/auth');


router.use(express.json());
// router.use(express.urlencoded());
// Movies CRUD




router.get('/Movies',authorization,getMovies,)
router.get('/Movies/:id',authorization,getMoviesByid)
router.post('/Movies/',authorization,createMovie)
router.delete('/Movies/',authorization,deleteMovie)
router.put('/Movies/',authorization,updateMovie)

router.get('/Users',authorization,getUsers)
router.get('/Users/:id',authorization,getUserByid)
router.post('/Users/',authorization,createUser)
router.delete('/Users/',authorization,deleteUser)
router.put('/Users/',authorization,updateUser)





let pesanIndex = '<div><ul><li><a href="/film" >List Film</a></li><li><a href="/film/id/1" >Film ID 1 </a></li><li><a> ID film dapat di ubah secara manual dengan mengubah angka pada url </a></li><li><a href="/film/category/" >List category</a></li><li><a href="/film/category/Action" >Category Action</a></li><li><a>Category Action  dapat diaganti kategori lain pada URL</a></li><li><a href="/infoActor/" >List infoActor</a></li></ul></div>'

router.get('/',function(req,res){
    res.send(pesanIndex);
})

module.exports = router