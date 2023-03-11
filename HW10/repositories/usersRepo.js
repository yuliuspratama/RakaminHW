const usersModel = require('../model/usersModel');

class usersRepository{
    static showAll = async (next) => {
        const data = await usersModel.showAll(next)
        return data
    }
    static getById = async (id,next) => {
        const data = await usersModel.getById(id,next)
        return data
    }
    static update = async (id,params,next) => {
        const data = await usersModel.update(id,params,next)
        return data
    }
    static create = async (params,next) => {
        const data = await usersModel.create(params,next)
        return data
    }
    static delete = async (params,next) => {
        const data = await usersModel.delete(params,next)
        return data
    }
}

module.exports = usersRepository