let path = require('path');
let TextToSVG = require('text-to-svg');

// 字体可以下载也可以从C:\Windows\Fonts复制
let fontPath = path.join(__dirname, './fonts/msyhbd.ttf');
let textToSVG = TextToSVG.loadSync(fontPath); // 加载字体文件

let options = {
    x: 0,         //文本开头的水平位置（默认值：0）
    y: 0,         // 文本的基线的垂直位置（默认值：0）
    fontSize: 36, // 字体大小
    anchor: 'top', // 坐标中的对象锚点
    // letterSpacing: "",  // 设置字母的间距
    attributes: {
        fill: '#FFFFFF' // 文字颜色
    }
}
let textSVG = textToSVG.getSVG('【前端名狮】', options);
console.log(textSVG);
let textSVG = Buffer.from(textSVG);
let bgPath = path.join(__dirname, './img/bg.jpg');
let targetPath = path.join(__dirname, '../dist/bg.jpg');
sharp(bgPath).composite([{
        input: textSVG,
        gravity: 'center'
    }]).toFile(targetPath);