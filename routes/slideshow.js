let express = require('express');
let router = express.Router();
let slideshowController = require('../controllers/slideshowController');

router.get('/', slideshowController.getAll);
router.get('/:id', slideshowController.getOne);
router.post('/', slideshowController.create);
router.put('/:id', slideshowController.update);
router.delete('/:id', slideshowController.deleteOne);

module.exports = router;
