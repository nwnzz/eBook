const express = require('express');
const BookController = require('./app/controllers/BookController');

const router = new express.Router();

router.get('/api', BookController.index);

router.post('/api', BookController.create);

router.put('/api/:id', BookController.update);

router.delete('/api/:id', BookController.destroy);

module.exports = router;