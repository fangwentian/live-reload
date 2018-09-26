const path = require('path')
const fs = require('fs')
const Koa = require('koa')
const serve = require('koa-static')
const HotReload = require('./hotReload')
const { port, watchDirs } = require('./util/getConfig')()

const boot = () => {
    let app = new Koa()

    app.use(serve(path.join(__dirname, './hotReload/client')))

    const server = app.listen(port)
    const reload = new HotReload({ server, watchDirs })
    reload.start()
}

module.exports = boot