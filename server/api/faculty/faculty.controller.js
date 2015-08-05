'use strict';

var _ = require('lodash');
var Faculty = require('./faculty.model');

// Get list of faculty
exports.index = function(req, res) {
    Faculty.find({})
    .populate('subjects')
    .exec(function (err, faculties) {
        if(err) { return handleError(res, err); }
        return res.status(200).json(faculties);
    });
};

/*
// Get a single faculty
exports.show = function(req, res) {
    Faculty.findById(req.params.id, function (err, faculty) {
        if(err) { return handleError(res, err); }
        if(!faculty) { return res.status(404).send('Not Found'); }
        return res.json(faculty);
    });
};
*/


exports.show = function(req, res) {
    Faculty.findById(req.params.id)
        .populate('subjects')
        .exec(function (err, faculty) {
            return res.status(201).json(faculty);
        })
};

// Creates a new faculty in the DB.
exports.create = function(req, res) {
    Faculty.create(req.body, function(err, faculty) {
        if(err) { return handleError(res, err); }
        return res.status(201).json(faculty);
    });
};

// Updates an existing faculty in the DB.
exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    Faculty.findById(req.params.id, function (err, faculty) {
        if (err) { return handleError(res, err); }
        if(!faculty) { return res.status(404).send('Not Found'); }
        var updated = _.merge(faculty, req.body);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.status(200).json(faculty);
        });
    });
};

// Deletes a faculty from the DB.
exports.destroy = function(req, res) {
    Faculty.findById(req.params.id, function (err, faculty) {
        if(err) { return handleError(res, err); }
        if(!faculty) { return res.status(404).send('Not Found'); }
        faculty.remove(function(err) {
            if(err) { return handleError(res, err); }
            return res.status(204).send('No Content');
        });
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}


