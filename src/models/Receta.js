import mongoose from 'mongoose'

const { model, Schema } = mongoose

const RecetaSchema = Schema({
  id: { type: Number, trim: true },
  nombre: { type: String, trim: true },
  receta: [{
    type: Schema.Types.ObjectId,
    ref: 'Ingrediente'
  }
  ]
})

const Receta = model('Receta', RecetaSchema)

export default Receta
