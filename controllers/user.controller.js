const models = require('../models/index');

async function  getUser(req,res){
  userId = req.params.id;
  const user = await models.User.findOne({where:{id:userId},attributes:['firstname','lastname']})
  res.json(user);

}

async function createUser(req,res){
  var data = req.body;
  var user, msg;
  const checkUser = await models.User.findOne({where:{email:data.email}});
  if (checkUser){
    msg = "Sorry you already have an account"
  } else {
    const user = await models.User.create({firstname:data.firstname, lastname:data.lastname,email:data.email, password:data.password});
    msg = "Account successfully created"
  
  }
  res.json(msg);
}

async function updateUser(req,res){
  userId = req.params.id;
  var data = req.body;
  const user = await models.User.update({firstname:data.firstname, lastname:data.lastname,email:data.email, password:data.password},{where:{id:userId}});
  res.json({msg:'User updated successfully'})

}
  

async function deleteUser(req,res){
  userId = req.params.id;
  const user = await models.User.destroy({where:{id:req.params.id}});
  res.json({mssg:'user deleted'})

}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
}