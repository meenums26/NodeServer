const express = require('express');
const router = express.Router();
const {getBasicData} = require('../controllers/basicController');
router.get('/data',getBasicData);

module.exports=router;