'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FacultySchema = new Schema({
    name: String,
    professors: [String],
    subjects: [{type: Schema.Types.ObjectId, ref: 'Subject'}],
    university: String,
    facultyImage: String,
    active: Boolean
});

module.exports = mongoose.model('Faculty', FacultySchema);

