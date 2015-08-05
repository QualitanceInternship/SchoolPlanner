'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FacultySchema = new Schema({
    name: String,
    professors: [String],
    subjects: [{type: Schema.Types.ObjectId, ref: 'Subject'}],
    active: Boolean
});

module.exports = mongoose.model('Faculty', FacultySchema);

