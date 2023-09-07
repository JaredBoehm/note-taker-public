const notes = require('express').Router()
const uuid = require('../util/uuid')
const fs = require('fs')

notes.get('/', (req, res) => {
    fs.readFile('./db/notes.json', 'utf8', (err, data) => (err) ? console.log(err) : res.json(JSON.parse(data)))
})

notes.post('/', (req, res) => {
    fs.readFile('./db/notes.json', 'utf8', (err, data) => {
        let savedNotes = JSON.parse(data)
        let newNote = req.body
        newNote.id = uuid()
        savedNotes.push(newNote)
        fs.writeFile('./db/notes.json', JSON.stringify(savedNotes), (err) => (err) ? console.log(err) : console.log(`New note (${newNote.id}) written to db.`))
    })
})

notes.delete('/:id', (req, res) => {
    console.log(`Request received to delete ${req.params.id}`)
    fs.readFile('./db/notes.json', 'utf8', (err, data) => {
        let savedNotes = JSON.parse(data)
        updatedNotes = savedNotes.filter(x => x.id !== req.params.id)
        fs.writeFile('./db/notes.json', JSON.stringify(updatedNotes), (err) => (err) ? console.log(err) : console.log(`Note (${req.params.id}) removed from db.`))
    })
})

module.exports = notes