const express = require('express');
var router = express.Router();



router.get('/pods1', function (req, res){
  res.sendFile(__dirname + "\\html\\index.html")
})

router.get('/pods2', function (req, res){
    res.sendFile(__dirname + "\\html\\index1.html")
  })



module.exports = router;