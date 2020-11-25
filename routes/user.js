var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller');

router.get('/', controller.getUser);
router.post('/create', controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;