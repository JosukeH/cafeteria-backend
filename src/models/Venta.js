import mongoose from 'mongoose'

const { Schema, model } = mongoose

const ventaSchema = Schema({
  total: Number,
  fecha: String,
  productos: [{
    type: Schema.ObjectId,
    ref: 'Producto',
    precio: Number,
    cantidad: Number
  }]
})

const Venta = model('Venta', ventaSchema)

export default Venta
