const { getUsersList, addUser } = require("../services/users");
exports.getUsers = (req,res,next) => {
  return res.render("index", getUsersList());
}
exports.addNewUser = (req,res) =>{
  addUser(req,res)
}
