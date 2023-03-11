const express = require('express');
const usersServ = require('../service/usersservice');
class UserControler {

    static showAll = async (req,res,next) => {

        try {
            const data = await usersServ.showAll(next);
            if (!data){
                console.log('Menuju ErorHandler');
            }else{
                res.status(200).json(data);
            }
        } catch (err) {
            next(err)
        }
    }
    static getById = async (req,res,next) => {
        const {id} = req.params;
        try {
            const data = await usersServ.getById(id,next);
            if (!data){
                console.log('Menuju ErorHandler');
            }else{
                res.status(200).json(data);
            }
        } catch (err) {
            next(err)
        }
    }
    static postUpdate = async (req,res,next) => {
        const {id} = req.params;
        const params = req.body;
        console.log(params)
        try {
            const data = await usersServ.update(id,params,next);
            if (!data){
                console.log('Menuju ErorHandler');
            }else{
                res.status(201).json(`Berhasil Mengubah data ID : ${id}` );
            }
        } catch (err) {
            next(err)
        }
    }
    static postCreate = async (req,res,next) => {
        const params = req.body;
        console.log(params)
        try {
            const data = await usersServ.create(params,next);
            if (!data){
                console.log('Menuju ErorHandler');
            }else{
                res.status(201).json(`Berhasil Input Data Baru ${params}`);
            }
        } catch (err) {
            next(err)
        }
    }
    static delete = async (req,res,next) => {
        const params = req.body;
        console.log(params)
        try {
            const data = await usersServ.delete(params,next);
            if (!data){
                console.log('Menuju ErorHandler');
            }else{
                res.status(201).json(`Berhasil Hpus data ${params}`);
            }
        } catch (err) {
            next(err)
        }
    }

    
}

module.exports = UserControler;