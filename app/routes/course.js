const express = require('express');
const router = express.Router();
const { list, findOne } = require('../controllers/course');

router.get('/list', list);
router.get('/:id', findOne);

module.exports = router;