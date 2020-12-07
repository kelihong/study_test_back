
const { dir } = require('console');
const express = require('express')

const router = express.Router()


router.get('/', function (req, res) {

    var reqData = req.body

    let data = []
    let urlData = 'http://localhost:1314'

    // 包含了四个点的数据： 
    var imageDataItem = {
        canvas_modules: [ // 可能存在多个需要渲染的 canvas 模块
            {
                canvas_params: [{ "x": -5, "y": 225.75 }, { "x": 420, "y": 105.75 }, { "x": 615, "y": 313.25 }, { "x": 94, "y": 541.25 }], // 画布参数
            },
            {
                canvas_params: [{ "x": -5, "y": 225.75 }, { "x": 420, "y": 105.75 }, { "x": 615, "y": 313.25 }, { "x": 94, "y": 541.25 }], // 画布参数
            },
        ],
        locate_image: urlData + '/static/images/locate_image.png', // 模型定位图片
        type: 2,    // 2d 、 3d 类型 ， 2: 2d | 3: 3d,
        texture: urlData + '/static/images/texture.png', // 花纹装饰图
        view_type: 1, // 判断哪个面
    }

    for (let i = 0; i < 5; i++) {
        data.push(imageDataItem)
    }

    data = [
        {
            "locate_image": "https://nimg5.hicustom.com/static/productTypeDetBottom/QN69HM-83e1c8-1-30-1-500-c0018db5dab47c8ca3416e87ba09a578.png",
            "texture": "https://nimg5.hicustom.com/static/productTypeDetTexture/QN69HM-343226b-1-30-1-500-659f6c82e1c27b7e69be45e5a6922281.png",
            "master": 1,
            "canvas_modules": [
                {
                    "type": 0,
                    "cover_img": [],
                    "mask": [],
                    "canvas_params": "[{\"x\":-5,\"y\":225.75},{\"x\":420,\"y\":105.75},{\"x\":615,\"y\":313.25},{\"x\":94,\"y\":541.25}]",
                    "target_view_id": 1,
                    "distortParams": {
                        "p1": "-5,129.75",
                        "p2": "94,445.25",
                        "p3": "615,217.25",
                        "p4": "420,9.75"
                    }
                }
            ],
            "is_custom": 0
        },
        {
            "locate_image": "https://nimg5.hicustom.com/static/productTypeDetBottom/QN69HM-846388-1-30-2-500-9c7de25163e26ef6639577672ff1883d.png",
            "texture": "https://nimg5.hicustom.com/static/productTypeDetTexture/QN69HM-34d553d-1-30-2-500-312af0f1306d8dda05e9af78cd388e03.png",
            "master": 0,
            "canvas_modules": [
                {
                    "type": 0,
                    "cover_img": [],
                    "mask": [],
                    "canvas_params": "[{\"x\":74,\"y\":154.75},{\"x\":536,\"y\":146.75},{\"x\":541,\"y\":461.25},{\"x\":80,\"y\":469.25}]",
                    "target_view_id": 1,
                    "distortParams": {
                        "p1": "74,58.75",
                        "p2": "80,373.25",
                        "p3": "541,365.25",
                        "p4": "536,50.75"
                    }
                }
            ],
            "is_custom": 0
        },
        {
            "locate_image": "https://nimg5.hicustom.com/static/productTypeDetBottom/QN69HM-845c13-1-30-3-500-ca30b69f024aba3d6a0da9570d21531f.png",
            "texture": "https://nimg5.hicustom.com/static/productTypeDetTexture/QN69HM-3432353-1-30-3-500-04f2be0b2f1f5af3c79ea831246aa4a3.png",
            "master": 0,
            "canvas_modules": [
                {
                    "type": 0,
                    "cover_img": [],
                    "mask": [],
                    "canvas_params": "[{\"x\":27,\"y\":136.75},{\"x\":568,\"y\":135.75},{\"x\":567,\"y\":504.25},{\"x\":27,\"y\":502.25}]",
                    "target_view_id": 1,
                    "distortParams": {
                        "p1": "27,41",
                        "p2": "27,406.5",
                        "p3": "567,408.5",
                        "p4": "568,40"
                    }
                }
            ],
            "is_custom": 0
        },
        {
            "locate_image": "https://nimg5.hicustom.com/static/productTypeDetBottom/QN69HM-845d55-1-30-4-500-f8668fe1b7a1d475430b1e7facd8c5ab.png",
            "texture": "https://nimg5.hicustom.com/static/productTypeDetTexture/QN69HM-3442098-1-30-4-500-b4752f33b64f20c5d343fa539e46e956.png",
            "master": 0,
            "canvas_modules": [
                {
                    "type": 0,
                    "cover_img": [],
                    "mask": [],
                    "canvas_params": "[{\"x\":-29,\"y\":111.75},{\"x\":561,\"y\":134.75},{\"x\":600,\"y\":548.25},{\"x\":-23,\"y\":546.25}]",
                    "target_view_id": 1,
                    "distortParams": {
                        "p1": "-29,15.75",
                        "p2": "-23,450.25",
                        "p3": "600,452.25",
                        "p4": "561,38.75"
                    }
                }
            ],
            "is_custom": 0
        },
        {
            "locate_image": "https://nimg5.hicustom.com/static/productTypeDetBottom/QN69HM-335ccf9-1-30-8-500-c7ec3b7222926ed98b685655f388d6ab.png",
            "texture": "https://nimg5.hicustom.com/static/productTypeDetTexture/QN69HM-335cd12-1-30-8-500-7f1f246e17c5a28dad24dcb6d3d457c3.png",
            "master": 0,
            "canvas_modules": [
                {
                    "type": 0,
                    "cover_img": [],
                    "mask": [],
                    "canvas_params": "[{\"x\":-33,\"y\":159},{\"x\":760,\"y\":-458},{\"x\":1282,\"y\":-115},{\"x\":357,\"y\":628}]",
                    "target_view_id": 1,
                    "distortParams": {
                        "p1": "-33,63",
                        "p2": "357,532",
                        "p3": "1282,-211",
                        "p4": "760,-554"
                    }
                }
            ],
            "is_custom": 0
        },
        {
            "locate_image": "https://nimg5.hicustom.com/static/productTypeDetBottom/QN69HM-845fd1-1-30-5-500-bea352fba57ffa374459b1232e0ade24.png",
            "texture": "https://nimg5.hicustom.com/static/productTypeDetTexture/QN69HM-3432373-1-30-5-500-8534784225db816c2d758cfc4fbc9f6f.png",
            "master": 0,
            "canvas_modules": [
                {
                    "type": 0,
                    "cover_img": [],
                    "mask": [],
                    "canvas_params": "[{\"x\":149,\"y\":335.75},{\"x\":269,\"y\":335.75},{\"x\":269,\"y\":415.25},{\"x\":151,\"y\":415.25}]",
                    "target_view_id": 1,
                    "distortParams": {
                        "p1": "149,240",
                        "p2": "151,319.5",
                        "p3": "269,319.5",
                        "p4": "269,240"
                    }
                },
                {
                    "type": 0,
                    "cover_img": [],
                    "mask": [],
                    "canvas_params": "[{\"x\":348,\"y\":335.75},{\"x\":466,\"y\":334.75},{\"x\":466,\"y\":415.25},{\"x\":349,\"y\":416.25}]",
                    "target_view_id": 1,
                    "distortParams": {
                        "p1": "348,240",
                        "p2": "349,320.5",
                        "p3": "466,319.5",
                        "p4": "466,239"
                    }
                },
                {
                    "type": 0,
                    "cover_img": [],
                    "mask": [],
                    "canvas_params": "[{\"x\":264,\"y\":261.75},{\"x\":145,\"y\":262.75},{\"x\":145,\"y\":181.25},{\"x\":264,\"y\":182.25}]",
                    "target_view_id": 1,
                    "distortParams": {
                        "p1": "264,166",
                        "p2": "264,86.5",
                        "p3": "145,85.5",
                        "p4": "145,167"
                    }
                },
                {
                    "type": 0,
                    "cover_img": [],
                    "mask": [],
                    "canvas_params": "[{\"x\":462,\"y\":262.75},{\"x\":344,\"y\":261.75},{\"x\":344,\"y\":182.25},{\"x\":461,\"y\":181.25}]",
                    "target_view_id": 1,
                    "distortParams": {
                        "p1": "462,167",
                        "p2": "461,85.5",
                        "p3": "344,86.5",
                        "p4": "344,166"
                    }
                }
            ],
            "is_custom": 0
        },
        {
            "locate_image": "https://nimg5.hicustom.com/static/productTypeDetBottom/QN69HM-8463b6-1-30-6-500-9495b21d903d720766e308dd238a1742.png",
            "texture": "https://nimg5.hicustom.com/static/productTypeDetTexture/QN69HM-3432382-1-30-6-500-e856fe6497c83180e48ab598046c3efa.png",
            "master": 0,
            "canvas_modules": [
                {
                    "type": 0,
                    "cover_img": [],
                    "mask": [],
                    "canvas_params": "[{\"x\":151,\"y\":336.75},{\"x\":268,\"y\":335.75},{\"x\":269,\"y\":416.25},{\"x\":151,\"y\":415.25}]",
                    "target_view_id": 1,
                    "distortParams": {
                        "p1": "151,241",
                        "p2": "151,319.5",
                        "p3": "269,320.5",
                        "p4": "268,240"
                    }
                },
                {
                    "type": 0,
                    "cover_img": [],
                    "mask": [],
                    "canvas_params": "[{\"x\":349,\"y\":333.75},{\"x\":466,\"y\":335.75},{\"x\":465,\"y\":416.25},{\"x\":348,\"y\":416.25}]",
                    "target_view_id": 1,
                    "distortParams": {
                        "p1": "349,238",
                        "p2": "348,320.5",
                        "p3": "465,320.5",
                        "p4": "466,240"
                    }
                },
                {
                    "type": 0,
                    "cover_img": [],
                    "mask": [],
                    "canvas_params": "[{\"x\":463,\"y\":261.75},{\"x\":344,\"y\":262.75},{\"x\":343,\"y\":181.25},{\"x\":462,\"y\":179.25}]",
                    "target_view_id": 1,
                    "distortParams": {
                        "p1": "463,166",
                        "p2": "462,83.5",
                        "p3": "343,85.5",
                        "p4": "344,167"
                    }
                },
                {
                    "type": 0,
                    "cover_img": [],
                    "mask": [],
                    "canvas_params": "[{\"x\":264,\"y\":262.75},{\"x\":144,\"y\":261.75},{\"x\":146,\"y\":181.25},{\"x\":263,\"y\":182.25}]",
                    "target_view_id": 1,
                    "distortParams": {
                        "p1": "264,167",
                        "p2": "263,86.5",
                        "p3": "146,85.5",
                        "p4": "144,166"
                    }
                }
            ],
            "is_custom": 0
        }
    ]

    res.send({
        data: {
            styles: data
        },
        code: 200
    })
})















module.exports = router