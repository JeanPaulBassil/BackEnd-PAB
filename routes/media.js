const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController.js');

router.get('/', mediaController.getAll);
router.get('/:id', mediaController.getOne);
router.post('/', mediaController.create);
router.put('/:id', mediaController.update);
router.delete('/:id', mediaController.deleteOne);

module.exports = router;