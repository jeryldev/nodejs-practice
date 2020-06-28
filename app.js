const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', expressHandlebars());

app.set('view engine', 'handlebars');
// app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

const hbs = expressHandlebars.create();

hbs.handlebars.registerHelper('isActive', (path, currentPath) => {
  return path === currentPath;
});

hbs.handlebars.registerHelper('isProductsEmpty', (products) => {
  return products.length > 0;
});
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

  res.locals.metaTags = {
    title: 'Page not found',
    // description: 'Handlebars description demo for your page',
    // keywords: 'Keywords for this page',
  };
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
