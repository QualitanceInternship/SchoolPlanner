'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  professor: String,  
  start: { type: Date, default: Date.now },
  end: { type: Date},
  title: String,
  eventType: String,
  year: { type: Number },  
  group: String,
  series: String,
  faculty: String,
  freq: {type: Number },
  noocc: {type: Number}
});

module.exports = mongoose.model('Event', EventSchema);