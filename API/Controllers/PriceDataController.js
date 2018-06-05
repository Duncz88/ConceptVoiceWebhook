'use strict';
var mongoose = require('mongoose');
var PriceData = mongoose.model('PriceData');

exports.processRequest = function(req, res) {
if (req.body.result.action == "prices") {
    getPriceData(req,res)
  }
  else if (req.body.result.action == "tell.about")
  {
      getPriceData(req,res)
  }
};

function getPriceData(req,res)
{
let modelToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.ModelName ? req.body.result.parameters.ModelName : 'Unknown';

PriceData.findOne({ModelName:modelToSearch},function(err,modelExists)
      {
        if (err)
        {
          return res.json({
              fulfillmentText: 'Something went wrong!',
              source: 'price info'
          });
        }
if (modelExists)
        {
          return res.json({
                fulfillmentText: 'The ' + modelExists.MakeName + ' ' + modelExists.ModelName + 'is available for ' + modelExists.DisplayPrice + ' drive away',
                source: 'price info'
            });
        }
        else {
          return res.json({
                fulfillmentText: 'I am unable to find details on pricing for this model',
                source: 'price info'
            });
        }
      });
}