import express from 'express'
import { createIngrediente, deleteIngrediente, getAllIngedients, updateIngredient } from '../controllers/IngredienteController.js'

const router = express.Router()

router.get('/', getAllIngedients)
router.post('/', createIngrediente)
router.delete('/', deleteIngrediente)
router.put('/', updateIngredient)

export default router
