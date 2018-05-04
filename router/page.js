const router = require("koa-router")();

router.get("/hello", async (ctx)=> {
    ctx.body = ctx.request.url;
})

module.exports = router;