// This is the base for modules to extend from.
// Modules will all contain the basic controller functions for spawning and despawning dependants,
// as well as communicating with the manager that spawned it, and requesting resources from other
// dependants.

var util = require('util');
var events = require('events');

function Module() {

}

util.inherits(Module, events.EventEmitter);

Module.prototype.initialize = function() {

};

