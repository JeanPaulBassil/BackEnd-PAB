const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController.js');
const authMiddleware = require('../middlewares/authMiddleware')


router.get('/', authMiddleware, settingsController.getAll);
router.get('/:id', authMiddleware, settingsController.getOne);
router.post('/', authMiddleware, settingsController.create);
router.put('/:id', authMiddleware, settingsController.update);
router.delete('/:id', authMiddleware, settingsController.deleteOne);

module.exports = router;