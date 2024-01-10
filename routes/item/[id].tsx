import { Handlers, PageProps } from "$fresh/server.ts";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "/db.ts";
import { items } from "/schema.ts";

type Item = Omit<typeof items.$inferSelect, "id">;

const idSchema = z.coerce.number().positive();

export const handler: Handlers = {
  async GET(_req, ctx) {
    const id = idSchema.parse(ctx.params.id);
    const data = await db.select({
      name: items.name,
      description: items.description,
      price: items.price,
      image: items.image,
    })
      .from(items)
      .where(eq(items.id, id));
    if (data.length === 0) return ctx.renderNotFound();
    return await ctx.render(data[0] satisfies Item);
  },
};

export default function Item({ data }: PageProps<Item>) {
  return (
    <>
      <h1 class="col-span-full font-bold text-2xl py-4">{data.name}</h1>
      <img src={data.image} class="w-full" />
      <p class="opacity-80 py-2">
        {data.description}
      </p>
      <p class="text-2xl opacity-80 py-2">${data.price.slice(0, -2)}</p>
    </>
  );
}
