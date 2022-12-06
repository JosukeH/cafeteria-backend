import User from '../models/User.js'
import generateId from '../helpers/generarId.js'
import generarJWT from '../helpers/generarJWT.js'

export const createUser = async (req, res) => {
  const { email } = req.body
  const userExists = await User.findOne({ email })
  console.log(userExists)
  if (userExists) {
    const error = new Error('User already exists')
    return res.status(400).json({ msg: error.message })
  }

  try {
    const newUser = new User(req.body)
    newUser.token = generateId()
    const userSaved = await newUser.save()
    res.json(userSaved)
  } catch (error) {

  }
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body
  // verificar si el usuario existe
  const userExist = await User.findOne({ email })
  if (!userExist) {
    const error = new Error('User not exists')
    return res.status(404).json({ error: error.message })
  }
  // verificar si el usuario esta verificado
  // if (!userExist.verfication) {
  // const error = new Error('User is not verified')
  // return res.status(403).json({ error: error.message })
  // }

  // verificar si el password esta bien
  if (await userExist.verifyPassword(password)) {
    return res.status(200).json({
      _id: userExist._id,
      name: userExist.name,
      email: userExist.email,
      verfication: userExist.verfication,
      token: generarJWT(userExist._id)
    })
  } else {
    const error = new Error('Password is incorrect')
    return res.status(403).json({ error: error.message })
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({ })
    res.json(users)
  } catch (error) {
    console.log(error)
    res.json({ error: 'error requesting data' })
  }
}
