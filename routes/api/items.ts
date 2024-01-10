import { FreshContext } from "$fresh/server.ts";
import { db } from "/db.ts";
import { items } from "/schema.ts";

export async function handler(_req: Request, _ctx: FreshContext) {
  const data = await db.select().from(items);
  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
}
