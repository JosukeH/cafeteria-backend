import Ingrediente from '../models/Ingrediente.js'

export const getAllIngedients = async (req, res) => {
  try {
    const allIngredientes = await Ingrediente.find({})
    res.json(allIngredientes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createIngrediente = async (req, res) => {
  const obj = req.body
  if (!obj) return res.status(500).json({ error: 'some params are missing' })
  try {
    const newObj = new Ingrediente(obj)
    await newObj.save()
    res.json(newObj)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateIngredient = async (req, res) => {
  const newData = req.body
  const { id } = newData
  if (!id) return res.status(500).json({ error: 'you must bring a id' })
  try {
    console.log(newData)
    const objectUpdated = await Ingrediente.findOneAndUpdate({ id }, newData, { new: true })
    return res.json(objectUpdated).status(202)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteIngrediente = async (req, res) => {
  const { id } = req.body
  if (!id) return res.status(500).json({ error: 'you must bring a id' })

  try {
    const objectDelete = Ingrediente.findOneAndDelete({ id })
    return res.json(objectDelete).status(202)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}
