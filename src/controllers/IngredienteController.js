import Ingrediente from '../models/Ingrediente.js'

export const createIngrediente = async (req, res) => {
  const ingrediente = req.body
  if (!ingrediente) return res.json({ error: 'some params is missing' })
  try {
    const { id } = ingrediente
    const exists = await Ingrediente.findOne({ id })
    if (!exists) {
      const newIngrediente = new Ingrediente(ingrediente)
      await newIngrediente.save()
      res.json(newIngrediente)
    } else {
      res.json({ error: 'ingredient already exists' })
    }
  } catch (error) {
    res.json(error)
  }
}

export const getAllIngredients = async (req, res) => {
  try {
    const ingredients = await Ingrediente.find()
    res.json(ingredients)
  } catch (error) {
    res.status(500).json({ error: 'cannot find any ingredient' })
  }
}
