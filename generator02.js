var co = require("co");
var thunkify = require("thunkify");

function func1() {
    setTimeout(function() {
        console.log("calling function 01");
        return "Step 01";
    }, 3000);
}

function func2() {
    setTimeout(function() {
        console.log("calling function 02");
        return "Step 02";
    }, 3000);
}

var func1Thunk = thunkify(func1);
var func2Thunk = thunkify(func2);

co(function* () {
    console.log('Thunk testing...');
    var test = yield func1Thunk();
    console.log(test);
    test = yield func2Thunk();
    console.log(test);
})();
