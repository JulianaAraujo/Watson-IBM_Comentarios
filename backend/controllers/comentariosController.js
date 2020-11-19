const db = require("../models")

exports.create = async (comment) => {
  const response = await db.comentarios.create(
    { comment: comment }
  )
  return response
}

exports.listAll = async (req, res) => {
  const response = await db.comentarios.findAll()
  res.send(response)
}