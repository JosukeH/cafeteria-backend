import MongoModel from '../models/MongoModel.js'

export const getAllModel = async (req, res) => {
  try {
    const model = await MongoModel.find({})
    res.json(model)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const create = async (req, res) => {
  const obj = req.body
  if (!obj) return res.status(500).json({ error: 'some params are missing' })
  try {
    const newObj = new MongoModel(obj)
    await newObj.save()
    res.json(newObj)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateApi = async (req, res) => {
  const newData = req.body
  const { id } = newData
  if (!id) return res.status(500).json({ error: 'you must bring a id' })
  try {
    const objectUpdated = MongoModel.findOneAndUpdate({ id }, newData, { new: true })
    return res.json(objectUpdated).status(202)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteApi = async (req, res) => {
  const { id } = req.body
  if (!id) return res.status(500).json({ error: 'you must bring a id' })

  try {
    const objectDelete = MongoModel.findOneAndDelete({ id })
    return res.json(objectDelete).status(202)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}
