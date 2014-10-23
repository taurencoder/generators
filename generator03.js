var co = require("co");
var thunkify = require("thunkify");

function func0(param) {
    return function(callback) {
        setTimeout(function() {
            console.log(param);
            callback();
        }, 2000);
    };
}

function func1(param, callback) {
    setTimeout(function() {
        console.log(param);
        callback(null, "function 01 done!");
    }, 2000);
}

function func2(param, callback) {
    setTimeout(function() {
        console.log(param);
        callback(null, "function 02 done!");
    }, 5000);
}

var func1Thunk = thunkify(func1);
var func2Thunk = thunkify(func2);

co(function* () {
    console.log('Thunk testing...');
    yield func0("this should be a thunk");

    var test = yield func1Thunk("calling function 01");
    console.log(test);
    test = yield func2Thunk("calling function 02");
    console.log(test);
})();
