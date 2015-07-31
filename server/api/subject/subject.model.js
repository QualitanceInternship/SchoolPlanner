'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SubjectSchema = new Schema({
  name: String,
  faculty: String,
  serie: String,
  teacher: String,
  year: Number,

});

module.exports = mongoose.model('Subject', SubjectSchema);