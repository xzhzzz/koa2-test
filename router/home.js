const router = require("koa-router")();

router.get("/", async( ctx )=>{
   ctx.body = ctx.request.url;
});

module.exports = router;