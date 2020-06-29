const express = require('express');

// Products Controller
const { getProducts } = require('../controllers/products');

const router = express.Router();

router.get('/', getProducts);

module.exports = router;
