'use strict';

var _ = require('lodash');
var Event = require('./event.model');

// Get list of things
exports.index = function(req, res) {
  Event.find(function (err, events) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(events);
  });
};

// Get a single thing
exports.show = function(req, res) {
  Event.findById(req.params.id, function (err, event) {
    if(err) { return handleError(res, err); }
    if(!event) { return res.status(404).send('Not Found'); }
    return res.json(event);
  });
};
// get events by user
exports.myStudentEvents = function(req, res) {     
        Event.find({ 'group': req.params.id }, function (err, event) {
            if(err) { return handleError(res, err); }
            if(!event) { return res.status(404).send('Not Found'); }
            return res.json(event);
          })
    };


exports.create = function(req, res) {
  Event.create(req.body, function(err, events) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(events);
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}