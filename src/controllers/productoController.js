import Producto from '../models/Producto.js'

export const getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.find({})
    res.json(productos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createProducto = async (req, res) => {
  const obj = req.body
  if (!obj) return res.status(500).json({ error: 'some params are missing' })
  try {
    const newObj = new Producto(obj)
    await newObj.save()
    res.json(newObj)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateProducto = async (req, res) => {
  const producto = req.body
  const { id } = producto
  if (!id) return res.status(500).json({ error: 'you must bring a id' })
  try {
    const objectUpdated = Producto.findOneAndUpdate({ id }, producto, { new: true })
    return res.json(objectUpdated).status(202)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteProduct = async (req, res) => {
  const { id } = req.body
  if (!id) return res.status(500).json({ error: 'you must bring a id' })

  try {
    const objectDelete = Producto.findOneAndDelete({ id })
    return res.json(objectDelete).status(202)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}
