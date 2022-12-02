import express from 'express'
import { createProducto, deleteProduct, getAllProductos, updateProducto } from '../controllers/productoController.js'

const router = express.Router()

router.get('/', getAllProductos)
router.post('/', createProducto)
router.delete('/', deleteProduct)
router.put('/', updateProducto)

export default router
