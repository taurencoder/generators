var co = require("co");
var thunkify = require("thunkify");

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

func1("async calling function 01...", function(err, result) {
    console.log(result);
});
func2("async calling function 02...", function(err, result) {
    console.log(result);
});
