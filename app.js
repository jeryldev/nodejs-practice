const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHandlebars = require('express-handlebars');

const app = express();

// app.engine(
//   'handlebars',
//   expressHandlebars({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'handlebars',
//   })
// );

// app.set('view engine', 'handlebars');
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Error Controller
const { get404page } = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(get404page);

app.listen(3000);
