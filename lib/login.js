exports.login = async() => {
    var qq = ''
    var pwd = ''
    var admins = []
    var login_mode = ''
    var platform = ''
    var device_lock = ''
    var oicq_conf = {}
    var colors = require("./colors")
    const process = require("process")
    const logger = require('./logger')
        .__logger
    const {
        LOGO, PATH
    } = require("./CONS")
    const {
        createClient
    } = require("oicq");
    const conf = require("./conf")
    conf.action.read(() => {
        try {
            qq = conf.action.read.data['bot']["qq"];
            pwd = conf.action.read.data['bot']["password"];
            admins = conf.action.read.data['bot']["admins"];
            login_mode = conf.action.read.data['bot']["login_mode"];
            platform = conf.action.read.data['bot']["platfrom"]
            device_lock = conf.action.read.data['bot']["device_lock"]
            oicq_conf = conf.action.read.data['oicq']
            console.log(oicq_conf)
        } catch (e) {
            logger.error("bot.json文件错误，请重新生成")
            process.exit()
        }
    })
    const bot = createClient(qq, oicq_conf);
    exports.bot = bot
    console.log(colors.green(LOGO + `框架配置文件: ` + PATH + "bot.json" + `\n框架地址: https: //github.com/Lisk809/LskBot
    `))
    //监听上线事件
    bot.on("system.online", () => {
        client.sendPrivateMsg(admins, "上线成功!")

    });
    if (login_mode == 'password') {
        bot.on("system.login.slider", function(event) { //监听滑动验证码事件
            logger.info(event)
            process.stdin.once("data", (input) => {
                this.sliderLogin(input); //输入ticket
            });
        })
            .on("system.login.device", function(event) { //监听登录保护验证事件
            if (device_lock == 'qrcode') {
                process.stdin.once("data", () => {
                    this.login(); //验证完成后按回车登录
                });
            }
            if (device_lock == 'SMS') {

                this.sendSMSCode() //发送短信
                process.on("data", (input) => {
                    this.submitSMSCode(input) //提交短信验证码
                })

            }
        })
            .login(pwd); //需要填写密码或md5后的密码
    }
    if (login_mode == 'qrcode') {
        bot.on("system.login.qrcode", function(event) {
            process.stdin.once("data", () => {
                this.login(); //扫码后按回车登录
            });
        })
            .login(); //这里不填写密码


    }
    bot.on('message', event =>{
        logger.info(event)
    
    
    })
}