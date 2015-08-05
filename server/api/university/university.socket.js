/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var university = require('./university.model');

exports.register = function(socket) {
    university.schema.post('save', function (doc) {
        onSave(socket, doc);
    });
    university.schema.post('remove', function (doc) {
        onRemove(socket, doc);
    });
}

function onSave(socket, doc, cb) {
    socket.emit('university:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('university:remove', doc);
}
