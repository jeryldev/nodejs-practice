const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();
// router.use(express.static(path.join(__dirname, '../', 'css')));

router.get('/', (req, res, next) => {
  res.status(200).sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
