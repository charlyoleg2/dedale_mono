import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const app = new Hono();

const route = app
	.get("/", (c) => {
		return c.text("Hello Hono!");
	})
	.get(
		"/what",
		//zValidator('query', z.object({ name: z.string().optional() }).optional()),
		zValidator("query", z.object({ name: z.string() })),
		(c) => {
			const query = c.req.valid("query");
			//console.log(query);
			//const name = query.name ? query.name : "blouf";
			return c.json(
				{
					ok: true,
					msg: `What ${query.name}`,
				},
				200,
			);
		},
	);

const port = 3010;
console.log(`Server is running on http://localhost:${port}`);

serve({
	fetch: app.fetch,
	port,
});

export type AppType = typeof route;
