/*
 * Manager
 * --------
 * This module manages all the interconnects between instances, and monitors the health of each
 * instance. Each instance has it's own sub-manager, which handles all of it's own modules and
 * responds to the core manager.
 * --------
 * If an instance stops responding, or a sub-manager is not behaving correctly, manual intervention
 * is required. If an instance is running and a sub-manager is behaving, any of the sub-manager's
 * modules can be controlled and restarted from the main manager.
 */

var util = require('util');
var events = require('events');

function Manager() {
	this.super_.call(this);
}
util.inherits(Manager, events.EventEmitter);

// Initialize the Manager module.
Manager.prototype.initialize = function() {

};

// Modify the rule for a dependant module.
// (string) name is the identifier (and directory) for the module.
// (number) count is the number of modules we want persisting.
Manager.prototype.module = function(name, count) {
	// If we are not yet handling this type of module, we need to create an object to track it.
	if (modules[name] === undefined) {
		modules[name] = new ModuleHandler();
	}
	modules[name].updateCount(count);
};

modules = {};

function ModuleHandler() {
	this.modules = [];
	this.count = 0;
	this.targetCount = 0;
}
ModuleHandler.prototype = {
	updateCount: function(count) {
		if (this.targetCount == count) {
			return;
		}
		this.targetCount = count;
		if (this.targetCount > count) {
			// We need to purge some modules.
		} else {
			// We need to add some modules.
		}
	},
	request: function(args) {

	}
};


function ModuleInstance() {
	this.status = 0x1000;
}
ModuleInstance.prototype = {
	initialize: function() {
		this.status = 0x1001; // Begin init.
		// Module init code goes here.
		this.status = 0x2000; // Now running ok.
	}
};


module.exports = Manager;