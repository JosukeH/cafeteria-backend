import express from 'express'
import { createUser, getUsers, loginUser } from '../controllers/usersController.js'

const router = express.Router()

router.get('/', getUsers)
router.post('/', createUser)
router.post('/login', loginUser)

export default router
