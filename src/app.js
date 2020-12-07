
const express = require('express')
const init = require('./modules/init')
const router = require('./modules/router')
const path = require('path')

const app = express()

init(app)
app.use(router)

// 配置静态文件目录
app.use('/static', express.static(path.join(__dirname, '../static/')))

app.listen(1314, function () {
    console.log('express now is running at port 1314...');
})