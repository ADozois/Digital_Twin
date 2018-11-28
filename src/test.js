var TimeoutManager = require("./timeoutManager");
const sleep = require('sleep');

var testFunction = function (){
    console.log('The function was executed');
}

var manager = new TimeoutManager();

manager.addTimeout("Test1", 1, testFunction);
manager.addTimeout("Test2", 30000, testFunction);


var test = setTimeout(testFunction, 1000);
