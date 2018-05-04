const Koa = require("koa");
const fs = require("fs");
const app = new Koa();

const router = require("./router/index");

app.use(router.routes()).use(router.allowedMethods());

app.listen(8083, ()=>{
    console.log("demo start-quick is starting at port 8083");
});
