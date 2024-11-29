import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const app = express()
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src', 'index.html'))
})

app.get('/update', (req, res) => {
    res.sendFile(path.join(__dirname, '/src', 'update.html'))
})

app.get('/task-details', (req, res) => {
    res.sendFile(path.join(__dirname, '/src', 'task-details.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/src', 'index.html'))
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
