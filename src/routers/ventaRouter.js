import express from 'express'
import { createVenta, deleteVenta, getAllVentas, updateVenta } from '../controllers/ventaController.js'

const router = express.Router()

router.get('/', getAllVentas)
router.post('/', createVenta)
router.delete('/', deleteVenta)
router.put('/', updateVenta)

export default router
