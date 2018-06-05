var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PriceData = new Schema({

MakeName:{
 type:String,
 required:false
},
ModelName:{
 type:String,
 required:false
},
SpeakPrice:{
 type:String,
 required:false
},
DisplayPrice:{
 type:String,
 required:false
}
});

module.exports = mongoose.model('PriceData', PriceData, 'carpricing');