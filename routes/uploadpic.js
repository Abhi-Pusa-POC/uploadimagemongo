var express = require('express');
var router = express.Router();
var multer  =   require('multer');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var fs = require('fs');

var A = require('./models/image_model');



var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    console.log("we are here to discuss the things");
    callback(null, file.fieldname + '-' + Date.now() + '.png');
  }
});
var upload = multer({ storage : storage}).single('userPhoto');

router.post('/',function(req,res,next){
    upload(req,res,function(err) {
        if(err) {
          console.log('error in upload',err);
            return res.send("Error uploading file.");
        }
        console.log('file is uploaded',req.file);
        // img path
        var imgPath = './uploads/'+req.file.filename;
        var a = new A;
        a.img.data = fs.readFileSync(imgPath);
        a.img.contentType = 'image/jpeg';
        a.save(function(err,aaa){
          if(err){
            console.log("some error happened");
            res.send("some error happened");
          }
          else{
            console.log("data is saved successfully in the system", aaa);
            res.send("data added successfully");
          }
        });
        //res.send("File is uploaded");
    });
});

module.exports = router;
