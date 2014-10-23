var delegatedIterator = (function* () {
  yield 'Hello!';
  yield 'Bye!';
}());

var delegatingIterator = (function* () {
  yield 'Greetings!';
  yield* delegatedIterator;
  yield 'Ok, bye.';
}());

for(var value of delegatingIterator) {
  console.log(value);
}
