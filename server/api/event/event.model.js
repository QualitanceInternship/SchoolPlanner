'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  professor: String,  
  date: { type: Date, default: Date.now },
  subject: String,
  eventType: String,
  year: { type: Number },  
  group: String,
  series: String,
  faculty: String

});

module.exports = mongoose.model('Event', EventSchema);