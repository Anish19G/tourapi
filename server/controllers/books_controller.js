const books = require('express').Router();

const db = require('../models')
const { Book } = db;

//Get all docs

books.get('/', async( req, res) =>{
    try {
        const fromBooks = await Book.findAll();
        res.status(200).json(fromBooks);
    } catch (err) {
        res.status(500).send('Server error');
        console.log(err);
    }
})

module.exports = books