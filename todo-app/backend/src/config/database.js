const mongoose = require('mongoose')

// tirar a mensagem de advertencia da Promise do mongoose que está depreciada
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true })