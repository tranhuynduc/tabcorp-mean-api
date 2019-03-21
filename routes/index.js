const express = require('express');
const router = express.Router();
const BookController = require('../controllers/book.controler');
router.get('/books', BookController.get);
router.post('/books', BookController.create);
router.delete('/books/:id', BookController.remove);
router.get('/books/category', BookController.getCategory);

module.exports = router;