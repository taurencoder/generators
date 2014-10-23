var koa = require("koa");
var router = require("koa-router");
var parser = require("koa-bodyparser");
var logger = require("koa-logger");
var responseTime = require("koa-response-time");
var app = koa();

app.use(responseTime());
app.use(logger());
app.use(parser());

app.use(function* (next){
    this.body = "koa works!";
    yield next;
});

app.listen("3000");
console.log("listening to port 3000");

module.exports = app;
