const moviemodel = require('../model/moviesModel');

class MoviesRepository{
    static showAll = async (next) => {
        const data = await moviemodel.showAll(next)
        return data
    }
    static getById = async (id,next) => {
        const data = await moviemodel.getById(id,next)
        return data
    }
    static update = async (id,params,next) => {
        const data = await moviemodel.updateMovie(id,params,next)
        return data
    }
    static create = async (params,next) => {
        const data = await moviemodel.createMovie(params,next)
        return data
    }
    static delete = async (params,next) => {
        const data = await moviemodel.deleteMovie(params,next)
        return data
    }
}

module.exports = MoviesRepository