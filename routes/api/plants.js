const express = require('express');
const router = express.Router();
const plantCtrl = require('../../controllers/api/plants');

router.get('/', plantCtrl.index);
// GET
router.get('/new', plantCtrl.new);
// GET 
router.get('/categories/:id', plantCtrl.show);
// POST
router.post('/', plantCtrl.create);


module.exports = router;