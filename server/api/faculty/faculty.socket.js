/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var faculty = require('./faculty.model');

exports.register = function(socket) {
    faculty.schema.post('save', function (doc) {
        onSave(socket, doc);
    });
    faculty.schema.post('remove', function (doc) {
        onRemove(socket, doc);
    });
}

function onSave(socket, doc, cb) {
    socket.emit('faculty:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('faculty:remove', doc);
}
