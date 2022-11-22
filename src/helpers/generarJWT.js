import jwt from 'jsonwebtoken'

const generarJWT = (id) => {
  return jwt.sign({ id }, 'carlos', {
    expiresIn: '30d'
  })
}
console.log(generarJWT())

export default generarJWT
