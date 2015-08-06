'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SubjectSchema = new Schema({
  name: String,
  faculties: [String],
  serie: String,
  teacher: String,
  year: Number,
  subjectImage: String,

});

module.exports = mongoose.model('Subject', SubjectSchema);