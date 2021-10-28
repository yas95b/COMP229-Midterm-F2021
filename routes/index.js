/*name : Yasaman Barzegar
  Student id: 301072907
  Date: 10/28/2021 
  COMP229 midterm*/
  
var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);



module.exports = router;
