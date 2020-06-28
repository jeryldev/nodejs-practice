const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  // res.status(200).sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.locals.metaTags = {
    title: 'Add Product',
  };
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
});

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  // console.log('products::', products);
  res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;
