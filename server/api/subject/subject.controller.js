'use strict';

var _ = require('lodash');
var Subject = require('./subject.model');

exports.index = function(req, res) {
  Subject.find(function (err, subjects) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(subjects);
  });
};

// Get a single thing
exports.show = function(req, res) {
  Subject.findById(req.params.id, function (err, subjects) {
    if(err) { return handleError(res, err); }
    if(!subjects) { return res.status(404).send('Not Found'); }
    return res.json(subjects);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  Subject.create(req.body, function(err, subjects) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(subjects);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Subject.findById(req.params.id, function (err, subjects) {
    if (err) { return handleError(res, err); }
    if(!subjects) { return res.status(404).send('Not Found'); }
    var updated = _.merge(subjects, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(subjects);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Subject.findById(req.params.id, function (err, subjects) {
    if(err) { return handleError(res, err); }
    if(!subjects) { return res.status(404).send('Not Found'); }
    subjects.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}