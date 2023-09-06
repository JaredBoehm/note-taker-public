const express = require('express')
const api = require('./routes/index.js')
const path = require('path')

const app = express()
const PORT = process.env.port || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', api)

app.use(express.static('public'))

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')))

app.listen(PORT, () => console.log(`Live at http://localhost:${PORT}`))