var express = require('express')
var cors = require('cors')
var morgan = require('morgan')
const app = express()
app.use(morgan('short'))
app.use(express.json())
app.use(express.static('build'))
app.use(cors())


let notes = [  
 {    id: 1,    content: "HTML is easy",    date: "2019-05-30T17:30:31.098Z",    important: true  }, 
 {    id: 2,    content: "Browser can execute only Javascript",    date: "2019-05-30T18:39:34.091Z",    important: false  },
 {    id: 3,    content: "GET and POST are the most important methods of HTTP protocol",    date: "2019-05-30T19:20:14.298Z",    important: true  }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!')
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()    
    }
})

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)

    res.status(204).end()
});

const generateID = () => {
    const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
    return maxId + 1
}

app.post('/api/notes', (req, res) => {
    const body = req.body
    console.log(`req.body is ${body.content}`);
    if (!body.content) {
       return res.status(400).json({
           error: 'content missing'
           
       }) 
    }
    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateID()
    }
    notes = notes.concat(note)

    res.json(note)
});

// const app = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'application/json'
//     })
//     res.end(JSON.stringify(notes))
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
}
)
// console.log(`Server running on port ${port}`;
