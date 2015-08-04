'use strict';

var Faculty = require('../faculty/faculty.model');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UniversitySchema = new Schema({
    name: String,
    faculties: {
                type: mongoose.Schema.Types.ObjectId, ref: "Faculty"
                },
    active: Boolean
});

module.exports = mongoose.model('University', UniversitySchema);
module.exports = mongoose.model('Faculty', Faculty);
