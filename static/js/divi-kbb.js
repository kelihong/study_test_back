/**
 * 多面展示思路
 * 
 * 1. 获取到生成的 png 图
 * 2. 获取到多面展示底图
 * 3. 根据每个底图的数据渲染图片
 * 4. 展示到swiper 
 * 
 * desc:    
    * 1. 每次渲染只修改当前面的图片，优化性能
    * 2. 每次加载时展示 loading ， 考虑放在 swiper-container 上
    * 
    * 
 */

//  获取到生成的图片地址： 

let urlResult = '/static/images/index_bg.png'

// 获取接口数据之图片的底图+ 位置信息
function fetchImageData() {
   $.ajax
}
