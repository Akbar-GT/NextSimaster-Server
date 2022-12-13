const express = require('express');
const router = express.Router();
const notification = require('./notification');
const courseResult = require('./courseResult');
const course = require('./course');

router.get('/check-health', (request, response) => response.send('Application is running'));
router.use('/notification', notification);
router.use('/course-result', courseResult);
router.use('/course', course);

module.exports = router;