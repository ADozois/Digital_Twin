const moment = require('moment')
const status = require('./status')

class Device {

    constructor(deviceId, name){
        this.deviceId = deviceId;
        this.name = name;
        this.status = status.CONNECTED;
        this.lastUpdated = moment().format();
        this.properties = {
            'desired':{},
            'reported':{}
        }
    }

    getDeviceId(){
        return this.deviceId;
    }

    getStatus(){
        return this.status;
    }

    disconnect(){
        this.status = status.DISCONNECTED;
    }

    connect(){
        this.status = status.CONNECTED;
    }

    updateReported(property, value){
        this.properties.reported[property] = value;
        this.lastUpdated = moment().format();
    }

    updateDesired(property, value){
        this.properties.desired[property] = value;
        this.lastUpdated = moment().format();
    }
    
}

module.exports = Device