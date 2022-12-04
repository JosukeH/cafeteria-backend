import mongoose from 'mongoose'

const { model, Schema } = mongoose

const ProductoSchema = Schema({
  id: Number,
  nombre: String,
  precio: Number,
  tipo: String,
  categoria: String,
  receta: [{
    id: Number,
    ingrediente: String,
    cantidad: Number
  }]

})

const Producto = model('Producto', ProductoSchema)

export default Producto
