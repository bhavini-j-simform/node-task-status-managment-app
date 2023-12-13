// routes/regestrationRoutes.js
const express = require('express');
const router = express.Router();
const { createRegestration } = require('../controllers/regestrationController');

router.post('/signup', createRegestration);

module.exports = router;
