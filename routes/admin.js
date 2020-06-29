const express = require('express');

// Products Controller
const {
  getAddProductPage,
  postAddProductPage,
} = require('../controllers/products');

const router = express.Router();

router.get('/add-product', getAddProductPage);

router.post('/add-product', postAddProductPage);

// exports.routes = router;
module.exports = router;
