import mongoose from 'mongoose'

const { model, Schema } = mongoose

const RecetaSchema = Schema({
  id: Number,
  nombre: String,
  receta: [{
    type: Schema.ObjectId,
    ref: 'Ingrediente',
    cantidad: Number
  }
  ]
})

const Receta = model('Receta', RecetaSchema)

export default Receta
