const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController.js');
const authMiddleware = require('../middlewares/authMiddleware')


router.get('/', authMiddleware, mediaController.getAll);
router.get('/:id', authMiddleware, mediaController.getOne);
router.post('/', authMiddleware, mediaController.create);
router.put('/:id', authMiddleware, mediaController.update);
router.delete('/:id', authMiddleware, mediaController.deleteOne);

module.exports = router;