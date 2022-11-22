import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDatabase } from './config/db.js'
import usersRouter from './routers/usersRouter.js'

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

app.get('*', (req, res) => {
  res.send('La Divina Cafeteria / ERROR 404')
})

app.listen(PORT, () => {
  console.log(`Server running 🚀 on port ${PORT}`)
})
