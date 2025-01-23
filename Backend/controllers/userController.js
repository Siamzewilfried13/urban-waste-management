const User = require("../libs/model/userModel")

//create a new user
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

//get list of users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

//update user informations
exports.updateUser = async  (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        if(!user) return res.status(404).json({message: 'User not found!'})
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

//delete a user 
exports.deleteUser = async  (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user) return res.status(404).json({message: 'User deleted successfully!'})
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}