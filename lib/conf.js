var fs=require("fs")
var PATH=require("./CONS")
var a=''
var action={}
action.read=async (callback)=>{
const readFile = function(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            } 
            resolve(data);
        })
    })
}
readFile('/data/data/com.termux/files/home/LskBot/bot.json').then(data =>{
    
    exports.action.read.data=JSON.parse(data)
    callback()
})
}
/*
 *@param {object} data
 */


action.write=async data=>{
    fs.writeFile(PATH+'bot.json',JSON.stringify(data), err =>{
        if(err){
            console.log(err)
        }
    
    })


}
exports.action=action