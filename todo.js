const express = require('express')

const app = express()

app.use(express.json())

const PORT = 3000

// variabla qe ka me permbajte taskat ton(kishe databaze)
let todos = []

//get metoda
app.get('/todos' , (req,res)=>{
    res.json(todos)
})
//post metoda
app.post('/todos', (req,res)=>{
    const newtodo = {id: Date.now(), text: req.body.text, completed: false}
    todos.push(newtodo)
    res.json(newtodo)
})
//update metoda
app.put('/todos/:id', (req,res)=>{
    // jem tu shku te secili task 
    // nese id nuk eshte njejt me ato qe aj e ka shenu 
    // ne link athere e kthen nje erro
    todos = todos.map(todo => todo.id != req.params.id ? todo : {...todo, ...req.body})

    res.json({message: 'tasku u bo update'})
})
//delete metoda
app.delete('/todos/:id', (req,res)=>{
    todos = todos.filter(todo => todo.id != req.params.id)
    res.json({message:' tasku u bo delete'})
})


app.listen(PORT, ()=>{
    console.log(`serveri po punon ne http://localhost:${PORT}`)
})