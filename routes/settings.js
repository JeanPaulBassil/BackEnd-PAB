const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController.js');


router.get('/', settingsController.getAll);
router.get('/:id', settingsController.getOne);
router.post('/', settingsController.create);
router.put('/:id', settingsController.update);
router.delete('/:id', settingsController.deleteOne);

module.exports = router;