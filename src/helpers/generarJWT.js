import jwt from 'jsonwebtoken'

const generarJWT = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: '30d'
  })
}

export default generarJWT
