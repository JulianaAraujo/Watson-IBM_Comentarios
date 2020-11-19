const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')

app.engine('.ejs', require('ejs').__express)
app.set('views', __dirname + '/')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/', async (req, res, next) => {
    const options = {
        url: "http://0.0.0.0:3000/listarComentarios",
        method: "GET",
        headers: {
            "Content-Type": "Application/json"
        }
    }
    const response = await axios(options);
    const comments = response.data;

    res.render('./views/', {comments})
})

app.post('/postComentario', async (req, res) => {
    if (req.body.comment.replace(/\s/g, '').length == 0) {
        res.redirect('/')
    } else {
        const options = {
            url: "http://0.0.0.0:3000/enviarComentario",
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            data: {
                comment: req.body.comment,
                id: req.body.id
            }
        }
        const response = await axios(options)
        res.redirect('/')
    }
})

app.use(express.static(__dirname + '/'))

app.listen(8080, () => {
    console.log('Servindo na porta 8080')
})
