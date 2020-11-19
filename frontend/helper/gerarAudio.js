const axios = require('axios')

module.exports = async (text, id) => {
    const options = {
        url: "http://0.0.0.0:3000/gerarAudio",
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        data: {
            comment: text,
            id: id
        }
    }
    const response = await axios(options)
    return response
}