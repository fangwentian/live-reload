const WSServer = require('./wsServer');
const Watcher = require('./watcher');
const path = require('path');

const cwd = process.cwd();

module.exports = class HotReload {
    constructor({ server, watchDirs = [] }) {
        this.server = server;
        this.watchDirs = watchDirs;
    }
    
    start() {
        const wss = new WSServer({ server: this.server });
        wss.start();

        const watches = new Watcher({ files: this.watchDirs, wss });
        watches.start();
    }
};