const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('first use');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('second use');
//   res.send('<h1>Hello Express!</h1>');
// });

app.use('/users', (req, res, next) => {
  console.log('list of users');
  //   res.send('<h1>List of users</h1>');
  res.json({
    users: [
      { id: 1, name: 'jeryl' },
      { id: 2, name: 'ara' },
    ],
  });
});

app.use('/', (req, res, next) => {
  console.log('Home page');
  res.send('<h1>Home page</h1>');
});

app.listen(3000);
