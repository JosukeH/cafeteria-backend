import mongoose from 'mongoose'

const ingredienteSchema = mongoose.Schema({
  nombre: String,
  unidadTotal: Number,
  PrecioIngrediente: Number,
  TipoIngrediente: String
})

const Ingrediente = mongoose.model('Ingrediente', ingredienteSchema)

export default Ingrediente
