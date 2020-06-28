const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // res.status(200).sendFile(path.join(rootDir, 'views', 'shop.html'));
  const productList = adminData.products;
  res.locals.metaTags = {
    title: 'My Shop',
  };
  res.render('shop', {
    products: productList,
    pageTitle: 'My Shop',
    path: '/',
    hasProducts: productList.length > 0,
  });
});

module.exports = router;
