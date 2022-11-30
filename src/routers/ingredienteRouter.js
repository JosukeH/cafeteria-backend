import express from 'express'
import { createIngrediente, getAllIngredients } from '../controllers/IngredienteController.js'

const router = express.Router()

router.get('/', getAllIngredients)
router.post('/', createIngrediente)
// router.post('/login', loginUser)

export default router
