var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// example schema
var schema = new Schema({
    img: { data: Buffer, contentType: String }
});

//connection to the model
var A = mongoose.model('A', schema);

module.exports = A;
