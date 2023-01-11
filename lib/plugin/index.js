exports.createPlugin=class {
    constructor(name, version){
        this.name=name
        this.version=version
        this.logger=require('../logger').plugin
        this.Mounted= main =>{
        try{
            main()
        } catch(e){
            require('../logger').plugin.error(e)
        }
        }
    }


}