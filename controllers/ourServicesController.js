const { OurServices } = require('../models')
const defaultCruds = require('./defaultCruds.js')

const getAll = defaultCruds.getAll(OurServices)
const getOne = defaultCruds.getOne(OurServices)
const create = defaultCruds.create(OurServices)
const update = defaultCruds.update(OurServices)
const deleteOne = defaultCruds.deleteOne(OurServices)    


module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
}