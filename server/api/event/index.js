'use strict';

var express = require('express');
var controller = require('./event.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/usergroup/:id', controller.myStudentEvents);
router.post('/', controller.create);


module.exports = router;