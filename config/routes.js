const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controller');

router.get('/', controller.base);
router.get('/celebrities', controller.listCelebrities);
router.get('/celebrities/:id', controller.celebrityDetail);

module.exports = router;