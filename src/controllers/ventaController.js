import Venta from '../models/Venta.js'
import Producto from '../models/Producto.js'
import Ingrediente from '../models/Ingrediente.js'

export const convertString = function (a) {
  return a.toString()
}

export const reduceStock = async (id) => {
  try {
    const item = await Ingrediente.findOne({ _id: id })
    if (!item) return { error: 'cannot find ' + id }
    console.log({ item })
    const porcion = item.porcion
    item.unidadTotal -= porcion
    const updated = await Ingrediente.findOneAndUpdate({ _id: id }, item, { new: true })
    await updated.save()
    console.log(updated)
    return updated
  } catch (error) {
    console.log(error.message)
    return { error: error.message }
  }
}

export const getAllVentas = async (req, res) => {
  try {
    const model = await Venta.find({}).populate({ path: 'productos', populate: { path: 'receta', populate: 'receta' } })
    res.json(model)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createVenta = async (req, res) => {
  const obj = req.body
  if (!obj) return res.status(500).json({ error: 'some params are missing' })
  try {
    const today = new Date()
    const { productos } = obj

    const ids = productos.map(p => p.id)
    const results = []
    // const prodcs = await Producto.find().where('_id').in(ids)
    for (const id of ids) {
      const prod = await Producto.findOne({ _id: id })
      results.push(prod)
    }

    const recetas = []

    for (const id of results) {
      const prod = await Producto.findOne({ _id: id }).populate({ path: 'receta', populate: { path: 'receta' } })
      recetas.push(prod)
    }

    const arrOfIngredients = []

    for (const obj of recetas) {
      // console.log(obj.receta[0].receta[0]._id)
      const recetas = (obj.receta[0].receta)
      recetas.forEach(async element => {
        const id = convertString(element._id)
        await reduceStock(id)
        arrOfIngredients.push(id)
        // element.forEach(el => {
        //   arrOfIngredients.push(convertString(el._id))
        // })
      })
    }

    const sumarTotal = results.reduce((acum, currentValue) => acum + currentValue.precio, 0)

    const newObj = new Venta({
      total: sumarTotal,
      fecha: today.toISOString(),
      productos: results
    })
    await newObj.save()
    res.json(newObj)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateVenta = async (req, res) => {
  const newData = req.body
  const { id } = newData
  if (!id) return res.status(500).json({ error: 'you must bring a id' })
  try {
    const objectUpdated = Venta.findOneAndUpdate({ id }, newData, { new: true })
    return res.json(objectUpdated).status(202)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteVenta = async (req, res) => {
  const { id } = req.body
  if (!id) return res.status(500).json({ error: 'you must bring a id' })

  try {
    const objectDelete = Venta.findOneAndDelete({ id })
    return res.json(objectDelete).status(202)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}
