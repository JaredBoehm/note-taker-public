const notes = require('express').Router()
const fs = require('fs')

notes.get('/', (req, res) => {
    fs.readFile('./db/notes.json', 'utf8', (err, data) => (err) ? console.log(err) : res.json(JSON.parse(data)))
})

notes.post('/', (req, res) => {
    fs.readFile('./db/notes.json', 'utf8', (err, data) => {
        let savedNotes = JSON.parse(data)
        let newNote = req.body
        savedNotes.push(newNote)
        console.log(savedNotes)
        fs.writeFile('./db/notes.json', JSON.stringify(savedNotes), (err) => (err) ? console.log(err) : console.log('New note written to db.'))
    })
})

module.exports = notes