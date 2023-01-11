var log4js = require("log4js")
var path=require("path")
const {PATH}=require('./CONS')
log4js.configure({
  appenders:[{
    type: 'dateFile',
    //文件名为= filename + pattern, 设置为alwaysIncludePattern：true
    filename: PATH+'/log/LskBot',
    pattern: '-yyyy-MM-dd.log',
    //包含模型
    alwaysIncludePattern: true,
  }]
})
const logger = log4js.getLogger("LskBot")
const plugin_logger = log4js.getLogger("plugin")
logger.level = 'all';
module.exports={
    'plugin':plugin_logger,
    '__logger':logger

}