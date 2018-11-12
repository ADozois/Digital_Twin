const device = require('./device')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

var Devices = [new device('jhjkfahsfjkhd', 'dev1'),
                new device('dsdsadad', 'dev2')]

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/Devices',(res, resp) => {
    resp.send(JSON.stringify(Devices));  
});

app.put('/Device/:id',(req, res) => {
    var idDevice = req.params.id;
    Devices.forEach((value) => {
        if(value.deviceId == req.params.id){
            value.updateDesired(req.body.property, req.body.value);
        }
    });
    res.send(JSON.stringify(Devices))
});

app.listen(3000, () => console.log('listening on port 3000'));