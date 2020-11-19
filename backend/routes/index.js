const express = require('express');
const router = express.Router();
const comentariosController = require('../controllers/comentariosController')
const watsonTTS = require("../clients/watsonTTS")

router.post('/enviarComentario', async (req, res) => {
    const {comment} = req.body
    const response = await comentariosController.create(comment)
    const novoAudio = await watsonTTS(comment, response.id)

    res.send(novoAudio)
})

/* GET home page. */
router.get('/listarComentarios', comentariosController.listAll)

module.exports = router;
