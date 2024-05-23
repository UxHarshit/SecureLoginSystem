const express = require('express');
const authServices = require('../services/authServices');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/register', authServices.register);
router.post('/login', authServices.login);
router.get('/user', auth ,authServices.user);
router.post('/update', auth ,authServices.update);

module.exports = router;