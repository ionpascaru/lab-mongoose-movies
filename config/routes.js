const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controller');

router.get('/', controller.base);
router.get('/celebrities', controller.listCelebrities);
router.get('/celebrities/add', controller.addCelebrity);
router.post('/celebrities/add', controller.doAddCelebrity);
router.get('/celebrities/:id', controller.celebrityDetail);
router.get('/celebrities/:id/edit', controller.edit);
router.post('/celebrities/:id/edit', controller.doEdit);
router.post('/celebrities/:id/delete', controller.delete);

module.exports = router;