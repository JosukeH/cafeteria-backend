import mongoose from 'mongoose'

export const connectDatabase = async () => {
  try {
    const MONGO_URL = process.env.MONGO_URL
    const connection = await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    const url = `${connection.connection.host}:${connection.connection.port}`
    console.log(`DB connected to ${url}`)
  } catch (error) {
    console.log(`error: ${error.message}`)
    process.exit(1)
  }
}
