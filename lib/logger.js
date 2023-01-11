var log4js = require("log4js")
var path=require("path")
const {PATH}=require('./CONS')
log4js.configure({
  appenders: {
      'out': {
        type: 'stdout',
        layout: {
          type: "colored"
        }
      },
      'files':{
    type: 'dateFile',
    filename: PATH+'logs/LskBot',
    pattern: '-yyyy-MM-dd-hh:mm:ss.log',
  }
    },
    categories: {
      default: {
        appenders: ['out', 'files'],
        level: 'ALL'
      }
    },
})
const logger = log4js.getLogger("LskBot")
const plugin_logger = log4js.getLogger("plugin")
logger.level = 'all';
module.exports={
    'plugin':plugin_logger,
    '__logger':logger

}