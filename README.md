# live-reload-tool

> 监听文件的变化，刷新页面的小工具

## 使用

- 添加配置文件
在启动命令的同路径下添加 live-reload.config.js, 格式如下:
```js
const path = require('path');

module.exports = {
    port: 9000,
    watchDirs: [
        path.join(__dirname, 'mocks'),
        path.join(__dirname, '../src/main/resources/public/src/javascript'),
        path.join(__dirname, '../src/main/resources/public/src/css'),
        path.join(__dirname, '../src/main/resources/public/templates')
    ]
};
```
port: server的端口号
watchDirs: 要监听的文件夹

- 模板上添加script标签
```js
<script src="http://localhost:9000/__hotReload.js" id="__hotReload"></script>
```
端口号同配置项的port
