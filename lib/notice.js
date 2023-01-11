function main(){
    const {bot, lskConf}=require('./login')
    const util=require('util')
    bot.on('system.online',(){
        if(util.isArray(lskConf.admins))
        bot.sendPrivateMsg()
    
    })
}