const express = require('express');
const router = express.Router();
const { create, list, remove } = require('../controllers/category');
const { authCheck, adminCheck } = require('../middleware/authCheck');

router.post('/category', authCheck, adminCheck, create);
router.get('/category', authCheck, adminCheck, list);
router.delete('/category/:id', remove);
module.exports = router;
