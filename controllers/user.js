const User = require('../models/User')
const Category = require('../models/Category')
const Position = require('../models/Position')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function(req, res) {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.getById = async function(req, res) {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (e) {
    errorHandler(res, e)
  }
  
  module.exports.remove = async function(req, res) {
  try {
    await User.remove({_id: req.params.id})
    res.status(200).json({
      message: 'Категория удалена.'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.create = async function(req, res) {
	const salt = bcrypt.genSaltSync(10)
    const password = req.body.password
	const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(password, salt)
    	
  })

  try {
    await user.save()
    res.status(201).json(user)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.update = async function(req, res) {
	const salt = bcrypt.genSaltSync(10)
    const password = req.body.password
    const updated = {
    name: req.body.name,
	email: req.body.email,
	password: bcrypt.hashSync(password, salt)
  }

  

  try {
    const user = await User.findOneAndUpdate(
      {_id: req.params.id},
      {$set: updated},
      {new: true}
    )
    res.status(200).json(user)
  } catch (e) {
    errorHandler(res, e)
  }
}
}

