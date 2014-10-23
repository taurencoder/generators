function* test() {
    yield "hello";
    yield "ECMAScript 6";
}

var func = test();
console.log(func.next());
console.log(func.next());
console.log(func.next());
