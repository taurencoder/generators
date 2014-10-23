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
    yield func0("This is a thunk NOT generated by Thunkify...");

    var test = yield func1Thunk("calling function 01");
    console.log(test);
    test = yield func2Thunk("calling function 02");
    console.log(test);
})();

module.exports = {
    thunk1: func1Thunk,
    thunk2: func2Thunk
};


