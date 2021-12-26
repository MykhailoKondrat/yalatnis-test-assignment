const express = require("express");
const { getUsers, addNewUser } = require("../controllers/users");
const router  = express.Router()

router.get('/', getUsers)
router.post('/add-user', addNewUser)

module.exports = router;
