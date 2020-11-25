const express = require('express');
const router = express.Router();
const taskController = require ('../controllers/task.controller');

router.get ('/', taskController.getTask);
router.get('/user/:id',taskController.getTasks);
router.post ('/create/:id', taskController.createTask);
router.put ('/:id', taskController.updateTask);
router.delete ('/:id', taskController.deleteTask);

module.exports = router;
