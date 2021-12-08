const router = require('express').Router();
const assetsController = require('../controllers/assetsController');

router.get('/', assetsController.getAll);
router.get('/:id', assetsController.getById);
router.post('/', assetsController.create);
router.put('/:id', assetsController.update);
router.delete('/:id', assetsController.delete);

module.exports = router