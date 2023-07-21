let express = require('express');
let router = express.Router();
let slideshowController = require('../controllers/slideshowController');
const authMiddleware = require('../middlewares/authMiddleware')


router.get('/', authMiddleware, slideshowController.getAll);
router.get('/:id', authMiddleware, slideshowController.getOne);
router.post('/', authMiddleware, slideshowController.create);
router.put('/:id', authMiddleware, slideshowController.update);
router.delete('/:id', authMiddleware, slideshowController.deleteOne);

module.exports = router;
