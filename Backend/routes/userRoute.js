const express = require('express')
const router = express.Router()
const userControllers = require("../controllers/userController")

router.post('/', userControllers.createUser)
router.get('/', userControllers.getUsers)
router.put('/:id',userControllers.updateUser )
router.delete('/:id', userControllers.deleteUser)

module.exports = router