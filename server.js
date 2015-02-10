var manager = require('./manager.js');

manager.initialize();
manager.module('db', 1);
manager.module('games', 1);
manager.module('web', 2);