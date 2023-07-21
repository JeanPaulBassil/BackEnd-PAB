const { Media } = require('../models')
const defaultCruds = require('./defaultCruds.js')

const getAll = defaultCruds.getAll(Media)
const getOne = defaultCruds.getOne(Media)
const create = defaultCruds.create(Media)
const update = defaultCruds.update(Media)
const deleteOne = defaultCruds.deleteOne(Media)    


module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
}