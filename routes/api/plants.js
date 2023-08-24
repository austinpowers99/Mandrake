const express = require('express');
const router = express.Router();
const plantCtrl = require('../../controllers/api/plants');

// GET
router.get('/plant/new', plantCtrl.new);
// POST /plants
router.post('/plant', plantCtrl.create);


module.exports = router;