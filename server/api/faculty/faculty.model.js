'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FacultySchema = new Schema({
    name: String,
    departments: String,
    active: Boolean
});

module.exports = mongoose.model('Faculty', FacultySchema);

