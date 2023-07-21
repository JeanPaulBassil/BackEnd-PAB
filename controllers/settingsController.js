const { Settings } = require('../models')
const defaultCruds = require('./defaultCruds.js')

const getAll = defaultCruds.getAll(Settings)
const getOne = defaultCruds.getOne(Settings)
const create = defaultCruds.create(Settings)
const update = defaultCruds.update(Settings)
const deleteOne = defaultCruds.deleteOne(Settings)    


module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
}