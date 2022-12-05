import mongoose from 'mongoose'

const ingredienteSchema = mongoose.Schema({
  nombre: String,
  unidadTotal: Number,
  precio: Number,
  porcion: Number,
  tipoIngrediente: String,
  id: Number
})

const Ingrediente = mongoose.model('Ingrediente', ingredienteSchema)

export default Ingrediente
