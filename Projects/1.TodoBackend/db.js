const m = require('mongoose')
const { string, boolean } = require('zod')
m.connect('mongodb+srv://rupeshkotal99:Asdfghjkl%40786@cluster0.lwxkmgh.mongodb.net/newToDoDb')

const schema = m.Schema({
    title:String,
    description:String,
    status:Boolean
})

const todoDb = m.model('todos',schema)


module.exports={
    todoDb
}