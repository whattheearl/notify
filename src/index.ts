import { Elysia, t } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { sendMsg } from "./discord";

const app = new Elysia()
  .use(swagger())
  .get("/", ({ redirect }) => redirect('/swagger'))
  .post("/discord", async ({ body }) => {
    const { msg } = body;
    await sendMsg(msg);
    return null;
  }, {
    body: t.Object({
      msg: t.String()
    })
  })
  .listen(3000);


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
