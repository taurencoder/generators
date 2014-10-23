var co = require("co");
var thunkify = require("thunkify");

// function(param, callback) { callback(error, result);}

function func1(param, callback) {
    console.log(param);
    setTimeout(function() {
        callback(null, "function 01 done!");
    }, 4000);
}

function func2(param, callback) {
    console.log(param);
    setTimeout(function() {
        callback(null, "function 02 done!");
    }, 1000);
}

var func1Thunk = thunkify(func1);
var func2Thunk = thunkify(func2);

co(function* () {
    console.log('Thunk testing...');
    var test = yield func1Thunk("calling function 01");
    console.log(test);
    test = yield func2Thunk("calling function 02");
    console.log(test);
})();

