const express = require('express');
const router = express.Router();
const ourServicesController = require('../controllers/ourServicesController.js');

router.get('/', ourServicesController.getAll);
router.get('/:id', ourServicesController.getOne);
router.post('/', ourServicesController.create);
router.put('/:id', ourServicesController.update);
router.delete('/:id', ourServicesController.deleteOne);

module.exports = router;