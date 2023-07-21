const express = require('express');
const router = express.Router();
const ourServicesController = require('../controllers/ourServicesController.js');
const authMiddleware = require('../middlewares/authMiddleware')


router.get('/', authMiddleware, ourServicesController.getAll);
router.get('/:id', authMiddleware, ourServicesController.getOne);
router.post('/', authMiddleware, ourServicesController.create);
router.put('/:id', authMiddleware, ourServicesController.update);
router.delete('/:id', authMiddleware, ourServicesController.deleteOne);

module.exports = router;