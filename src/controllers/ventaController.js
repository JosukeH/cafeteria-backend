import Venta from '../models/Venta.js'

export const getAllVentas = async (req, res) => {
  try {
    const model = await Venta.find({})
    res.json(model)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createVenta = async (req, res) => {
  const obj = req.body
  if (!obj) return res.status(500).json({ error: 'some params are missing' })
  try {
    const newObj = new Venta(obj)
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
