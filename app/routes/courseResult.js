const express = require('express');
const router = express.Router();
const { list } = require('../controllers/courseResult');

router.get('/list', list);

module.exports = router;
