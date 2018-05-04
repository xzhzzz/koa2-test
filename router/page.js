const router = require("koa-router")();

router.get("/hello", async (ctx)=> {
    let url = ctx.request.url;
    let query = ctx.request.query;
    ctx.body = {
        url,
        query
    };
})
router.post("/form",async (ctx)=>{
    ctx.body = ctx.request.body
})

module.exports = router;