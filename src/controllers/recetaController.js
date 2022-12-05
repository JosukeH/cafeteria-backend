import Ingrediente from '../models/Ingrediente.js'
import Receta from '../models/Receta.js'

export const getAllReceta = async (req, res) => {
  try {
    const model = await Receta.find({}).populate('receta')
    res.json(model)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createReceta = async (req, res) => {
  const obj = req.body

  if (!obj) return res.status(500).json({ error: 'some params are missing' })
  try {
    const { receta, id, nombre } = obj

    const arrOfIds = receta.map(r => r.id)
    const ingredients = await Ingrediente.find().where('id').in(arrOfIds)

    // console.log(fixedIngre)
    const newObj = new Receta({
      id,
      nombre,
      receta: ingredients
    })
    await newObj.save()
    res.json(newObj)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateReceta = async (req, res) => {
  const newData = req.body
  const { id } = newData
  if (!id) return res.status(500).json({ error: 'you must bring a id' })
  try {
    const objectUpdated = Receta.findOneAndUpdate({ id }, newData, { new: true })
    return res.json(objectUpdated).status(202)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteReceta = async (req, res) => {
  const { id } = req.body
  if (!id) return res.status(500).json({ error: 'you must bring a id' })

  try {
    const objectDelete = Receta.findOneAndDelete({ id })
    return res.json(objectDelete).status(202)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}
