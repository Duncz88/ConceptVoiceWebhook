'use strict';
var express = require('express');
module.exports = function(app) {
  var priceDataController = require('../Controllers/PriceDataController');
var apiRoutes =  express.Router();
app.get('/',function(req,res){
    res.send('We are happy to see you using Voice Webhook');
  });
// registerUser Route
  app.route('/')
    .post(priceDataController.processRequest);
};