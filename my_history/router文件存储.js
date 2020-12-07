
const { dir } = require('console');
const express = require('express')

const router = express.Router()
const fs = require('fs');


router.post('/saveFile', function (req, res) {

    var reqData = req.body

    // 获取前端传来的base64数据
    let fileData = reqData.fileData

    // 获取文件类型
    let fileType = reqData.fileType

    // 获取文件名
    let fileName = reqData.fileName

    // 去掉文件格式， 去掉 base64, 等字符串，留下 诸如： 去除掉data:image/gif;base64, 以后的字符串
    let fileDataData = fileData.split(';')[1].replace('base64,', '')
    // 将去除过滤后的base64码，转换成 Buffer
    var file = new Buffer.from(fileDataData, 'base64')



    // 判断文件名是否存在，如果存在则 加 (1) 之类的、
    fs.readdir('./public/files/', function (err, files) {

        if (err) {
            return res.send({
                error: err,
                status: 500
            })
        }

        for (let i = 0; i < files.length; i++) {
            if (files[i] === fileName + '.' + fileType) {
                return res.send({
                    status: 400,
                    msg: '文件名已存在，请修改文件名！'
                })
            }
        }

        // 保存文件
        fs.writeFile('./public/files/' + fileName + '.' + fileType, file, (err) => {

            if (err) {
                throw err
            }
            console.log('文件已保存')
        })


        res.send({
            status: 200,
            msg: "保存成功！"
        })
    })


})

module.exports = router