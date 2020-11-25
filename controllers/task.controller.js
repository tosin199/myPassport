const models = require('../models/index');

async function getTask(req, res) {
    const task = await models.Task.findAll({include:[models.user]});
    res.json(task);
}
async function getTasks(req,res){
    userId = req.params.id;
    const tasks = await models.Task.findAndCountAll({where:{userId:userId}})
    res.json(tasks)

}

async function createTask(req, res) {
    userId = req.params.id;
    var data = req.body;
    const task = await models.Task.create({title:data.title,userId:userId});
    res.json(task);
}

async function updateTask(req, res) {
    var data = req.body;
     msg = req.params.id;
    const task = await models.Task.update(res.body,{where: {id:msg}
    });
    msg = 'Update Successful'
    res.json(msg);
}

async function deleteTask (req, res) {
    var userId = req.params.id;
    const task = await models.Task.destroy({where:{id: userId}})
    res.send('deleted')

}

module.exports = {
    getTask,
    getTasks,
    createTask,
    updateTask,
    deleteTask,
};
