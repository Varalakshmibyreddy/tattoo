const express = require('express');
const router = express.Router();
const tattooStyleController = require('../controllers/tattooStyleController');

// TattooStyle routes
router.post('/add', tattooStyleController.createTattooStyle);
router.get('/getadd', tattooStyleController.getTattooStyle);

module.exports = router;
