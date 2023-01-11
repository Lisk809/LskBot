/*
 *@param {number} max
 *@param {number} min
 *
 */

exports.randomInt = (max, min) => {
    return parseInt(Math.random() * (max - min + 1) + min, 10);
}
/**
 * @return 返回yyyy-MM-dd TT-mm-ss格式的消息，例如 '2023-01-03 20:28:27'
 */
exports.time = () => {
    var myDate = new Date();
    var tYear = myDate.getFullYear();
    var tMonth = myDate.getMonth();

    var m = tMonth + 1;
    if (m.toString()
        .length == 1) {
        m = "0" + m;
    }
    var yam = tYear + '-' + m;
    return yam + '-' + Date()
        .split(" ")[2] + ' ' + Date()
        .split(" ")[4]
}
/**
 *
 *
 *
 */
