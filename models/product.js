const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (callback) => {
  console.log(callback);
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, price, imageUrl, description) {
    // properties
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  save() {
    this.id = uuidv4().toString();
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // static enables me to call fetchAll() directly from the Products class and not on the instantiated object
  static fetchAll(callback) {
    getProductsFromFile(callback);
  }

  static findById(id, callback) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      console.log('products::', products);
      console.log('id::', id);
      console.log('pid::', id);
      console.log('product::', product);
      callback(product);
    });
  }
};
