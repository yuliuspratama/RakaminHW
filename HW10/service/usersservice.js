const usersRepo = require('../repositories/usersRepo');

class UsersService {

    static showAll = async (next) => {

        const data = await usersRepo.showAll(next);
        return data;
    }
    static getById = async (id,next) => {
        const data = await usersRepo.getById(id,next)
        return data
    }
    static update = async (params,next) => {
        const data = await usersRepo.update(params,next)
        return data
    }
    static create = async (id,params,next) => {
        const data = await usersRepo.create(id,params,next)
        return data
    }
    static delete = async (params,next) => {
        const data = await usersRepo.delete(params,next)
        return data
    }

}

module.exports = UsersService;