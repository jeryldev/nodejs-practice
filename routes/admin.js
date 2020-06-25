const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res
    .status(200)
    .send(
      '<form action="/admin/add-product" method="post"><input type="text" name="productname"/><button type="submit">Add Product</button></form>'
    );
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.send(`<h1>${req.body.productname} was added!</h1>`);
  // res.redirect('/');
});

module.exports = router;
