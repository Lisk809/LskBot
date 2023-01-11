module.exports = Object.assign(require("./login"), require("oicq"), require("./conf"), require("./CONS"), require("./colors"), {
    get dayjs() {
        return require("dayjs")
    }
}, require("./utils"))