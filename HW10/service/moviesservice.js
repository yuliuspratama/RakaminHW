const movieRepo = require('../repositories/moviesRepo');

class MovieService {

    static showAll = async (next) => {

        const data = await movieRepo.showAll(next);
        return data;
    }
    static getById = async (id,next) => {
        const data = await movieRepo.getById(id,next)
        return data
    }
    static update = async (params,next) => {
        const data = await movieRepo.update(params,next)
        return data
    }
    static create = async (id,params,next) => {
        const data = await movieRepo.create(id,params,next)
        return data
    }
    static delete = async (params,next) => {
        const data = await movieRepo.delete(params,next)
        return data
    }

}

module.exports = MovieService;