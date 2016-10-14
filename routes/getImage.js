var express = require('express');
var router  = express.Router();

var mongoose = require('mongoose');

var A = require('./models/image_model');
//connection to the model

router.get('/',function(req,res,next){
  //res.send('image is retrived from ');
  A.find({},function(err,data){
    if(err){
      console.log("error is problem",err);
      res.send("some error happened");
    }
    else{
      console.log(data);
      var base64dataa = new Buffer(data[1].img.data,'binary').toString('base64');
      res.send(base64dataa);
    }
  });
});

module.exports = router;
