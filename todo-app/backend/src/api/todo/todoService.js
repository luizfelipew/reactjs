const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
// por padrao o pudate nao atuliza algumas coisas
// new serve para trazer o registro novo que foi atualizado   
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo