import mongoose from 'monoose'

const { Schema, model } = mongoose.Schema

const ventaSchema = Schema({
  id: Number,
  total: Number,
  fecha: String,
  productos: [{
    type: Schema.Types.ObjectId,
    ref: 'Producto'
  }]
})

const Venta = model('Venta', ventaSchema)

export default Venta
