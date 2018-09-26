const path = require('path')
const fs = require('fs')

const defaultConfig = {
    port: 9000,
    watchDirs: []
}

module.exports = () => {
    const configFile = path.join(process.cwd(), './live-reload.config.js')

    if(fs.existsSync(configFile)) {
        return Object.assign({}, defaultConfig, require(configFile))
    }
    return defaultConfig
}