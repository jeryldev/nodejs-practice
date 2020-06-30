const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/products', {
      products: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      products: products,
      pageTitle: 'My Shop',
      path: '/',
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', { path: '/cart', pageTitle: 'Your Cart' });
};

exports.checkout = (req, res, next) => {
  res.render('shop/checkout', { path: '/checkout', pageTitle: 'Checkout' });
};
