function* test() {
    console.log("人家才不会马上执行！");
}

var func = test();
setTimeout(function(){
    func.next();
}, 5000);
