import mongoose from 'mongoose'
const ObjectId = mongoose.Types.ObjectId

const convertString = function (a) {
  return a.toString()
}

const a = ObjectId('6143b55ac9a762738b15d4f0')
const b = convertString(a)

console.log(a)
console.log(b)
