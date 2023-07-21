const { Slideshow } = require('../models')
const defaultCruds = require('./defaultCruds.js')


const getAll = defaultCruds.getAll(Slideshow)
const getOne = defaultCruds.getOne(Slideshow)
const create = defaultCruds.create(Slideshow)
const update = defaultCruds.update(Slideshow)
const deleteOne = defaultCruds.deleteOne(Slideshow)    


module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
}