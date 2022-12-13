const express = require('express');
const router = express.Router();
const { list, findOne, create } = require('../controllers/notification');

router.get('/list', list);
router.get('/:id', findOne);
router.post('/add', create)

module.exports = router;
