var log4js = require("log4js")
const logger = log4js.getLogger("LskBot")
const plugin_logger = log4js.getLogger("plugin")
logger.level = 'all';
module.exports={
    'plugin':plugin_logger,
    '__logger':logger

}