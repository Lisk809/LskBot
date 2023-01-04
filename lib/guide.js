var fs = require("fs")
var conf = require('./conf')
const logger = require('./logger').__logger

    function init() {
        var data = {}
        const prompt = require('prompt');

        // start the prompt
        prompt.start();
        var pwd = {
            properties: {
                password: {
                    required: true
                },
                password: {
                    hidden: true
                }
            }
        };
        const {
            qq, password
        } = await prompt.get(['qq', pwd, "login_mode", "platform"], function(err, result) {
            conf.action.write({
                "oicq": {
                    'qq': result.qq,
                    'password': result.password,
                    'login_mode': result.login_mode,
                    'platform': result.platform
                }

            })
        })

    }
    
    
    

fs.exists(__dirname + "/../bot.json", async result => {
    if (result == true) {
        logger.info("bot.json文件已存在，使用--cover参数来重新生成")

    } else {
    init()
    }

})