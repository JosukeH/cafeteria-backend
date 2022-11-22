import express from 'express'
import { createUser, loginUser } from '../controllers/usersController.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Desde api/usuarios')
})
router.post('/', createUser)
router.post('/login', loginUser)

export default router
