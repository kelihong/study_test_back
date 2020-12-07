

const bodyParser = require('body-parser')

function init(app) {


    // 跨域
    setCore(app)
    function setCore(app) {
        app.all('*', function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            res.header('Access-Control-Allow-Methods', '*');
            res.header('Content-Type', 'application/json;charset=utf-8');
            next();
        })

    }

    // 参数处理
    parseParams(app)
    function parseParams(app) {
        app.use(bodyParser.urlencoded({
            extended: false,
            limit: '100mb'  // 如果上传文件不设置这项，会报错（PayloadTooLargeError: request entity too large...)
        }))

        app.use(bodyParser.json({
            limit: '100mb'
        }))
    }



}

module.exports = init