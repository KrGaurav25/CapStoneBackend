var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("from index.js");
  // res.render('index', { title: 'Express' });
});

router.post('/',(req,res)=>{
//   console.log("req",req);
  console.log("hello from post");
  const user1 = new User({
    _id:new mongoose.Types.ObjectId(),
    name:'try name',
    email:'email@gmail.com',
    password:'trypass',
    admin:'true'
  })
  user1.save()
  .then((result)=>res.send({msg:'created contact'}))
  .catch((e)=>console.log(e))
//   res.send("yo");
});

module.exports = router;