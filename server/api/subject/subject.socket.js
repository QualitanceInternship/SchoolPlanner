'use strict';

var subject = require('./subject.model');

exports.register = function(socket) {
  subject.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  subject.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('subject:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('subject:remove', doc);
}