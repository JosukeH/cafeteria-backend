import express from 'express'
import { createReceta, deleteReceta, getAllReceta, updateReceta } from '../controllers/recetaController.js'

const router = express.Router()

router.get('/', getAllReceta)
router.post('/', createReceta)
router.delete('/', deleteReceta)
router.put('/', updateReceta)

export default router
