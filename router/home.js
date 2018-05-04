const router = require("koa-router")();

router.get("/", async( ctx )=>{
   let html = `<h1>koa2 request post demo</h1>
      <form method="POST" action="/page/form">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>`
   ctx.body = html;
});

module.exports = router;