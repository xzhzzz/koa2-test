const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const path = require("path");
const static = require("koa-static");

const app = new Koa();

app.use(bodyParser());

app.use(static(
    path.join( __dirname, "./static")
))

const router = require("./router/index");

app.use(router.routes()).use(router.allowedMethods());

app.listen(8083, ()=>{
    console.log("project is starting at port 8083");
});
