'use strict';

var _ = require('lodash');
var University = require('./university.model');

// Get list of universities
exports.index = function(req, res) {
    University.find(function (err, universities) {
        if(err) { return handleError(res, err); }
        return res.status(200).json(universities);
    });
};

// Get a single university
/*
exports.show = function(req, res) {
    University.findById(req.params.id, function (err, university) {
        if(err) { return handleError(res, err); }
        if(!university) { return res.status(404).send('Not Found'); }
        return res.json(university);
    });
};
*/

exports.show = function(req, res) {
    University.findById(req.param.id)
        .populate('faculties')
        .exec(function (err, university)
        {
        if(err) { return handleError(res, err); }
        if(!university) { return res.status(404).send('Not Found'); }
        return res.json(university);
    });
};


// Creates a new universities in the DB.
exports.create = function(req, res) {
    University.create(req.body, function(err, university) {
        if(err) { return handleError(res, err); }
        return res.status(201).json(university);
    });
};

// Updates an existing universities in the DB.
exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    University.findById(req.params.id, function (err, university) {
        if (err) { return handleError(res, err); }
        if(!university) { return res.status(404).send('Not Found'); }
        var updated = _.merge(university, req.body);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.status(200).json(university);
        });
    });
};

// Deletes a universities from the DB.
exports.destroy = function(req, res) {
    University.findById(req.params.id, function (err, university) {
        if(err) { return handleError(res, err); }
        if(!university) { return res.status(404).send('Not Found'); }
        university.remove(function(err) {
            if(err) { return handleError(res, err); }
            return res.status(204).send('No Content');
        });
    });
};



function handleError(res, err) {
    return res.status(500).send(err);
}


