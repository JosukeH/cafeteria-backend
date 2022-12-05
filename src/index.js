import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDatabase } from './config/db.js'
import usersRouter from './routers/usersRouter.js'
import ingredientsRouter from './routers/ingredienteRouter.js'
import ventaRouter from './routers/ventaRouter.js'
import productoRouter from './routers/productoRouter.js'
import recetaRouter from './routers/recetaRouter.js'

dotenv.config()
connectDatabase()
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('API de La Divina Cafeteria')
})
// Routing
app.use('/api/users', usersRouter)
app.use('/api/ingredients', ingredientsRouter)
app.use('/api/recetas', recetaRouter)
app.use('/api/venta', ventaRouter)
app.use('/api/producto', productoRouter)

app.get('*', (req, res) => {
  res.send('La Divina Cafeteria / ERROR 404')
})

app.listen(PORT, () => {
  console.log(`Server running 🚀 on port ${PORT}`)
})
