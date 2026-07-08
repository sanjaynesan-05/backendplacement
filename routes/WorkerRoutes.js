const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const { addStudent } = require('../controller/studentcontroller');

router.post('/addstudent', addStudent);

module.exports = router;