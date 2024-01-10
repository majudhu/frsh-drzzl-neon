import { FreshContext, Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { db } from "/db.ts";
import { items } from "/schema.ts";

type Items = typeof items.$inferSelect;

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext) {
    const data = await db.select().from(items) satisfies Items[];
    return await ctx.render(data);
  },
};

export default function Home({ data }: PageProps<Items[]>) {
  return (
    <>
      <section class="grid gap-4 grid-cols-3 pb-8">
        <h1 class="col-span-full font-bold text-2xl py-4">Featured Items</h1>
        {data.map((item) => (
          <article class="rounded-lg ring-1 ring-gray-200 shadow bg-white p-4">
            <img src={item.image} class="w-full" />
            <h2 class="font-medium text-lg py-2">{item.name}</h2>
            <p class="text-sm opacity-80 pb-2">
              {item.description}
            </p>
            <p class="font-semibold text-lg opacity-80 pb-2">
              ${item.price.slice(0, -2)}
            </p>
            <a href={`/item/${item.id}`}>View Item</a>
          </article>
        ))}
      </section>

      <section class="grid gap-4 grid-cols-5 pb-8">
        <h1 class="col-span-full font-bold text-2xl py-4">Trending Items</h1>
        {data.map((item) => (
          <article class="rounded-lg ring-1 ring-gray-200 shadow bg-white p-4">
            <img src={item.image} class="w-full" />
            <h2 class="font-medium text-lg py-2">{item.name}</h2>
            <p class="text-sm opacity-80 pb-2">
              {item.description}
            </p>
            <p class="font-semibold text-lg opacity-80 pb-2">
              ${item.price.slice(0, -2)}
            </p>
            <a href={`/item/${item.id}`}>View Item</a>
          </article>
        ))}
      </section>

      <section class="grid gap-4 grid-cols-5 pb-8">
        <h1 class="col-span-full font-bold text-2xl py-4">Latest Items</h1>
        {data.map((item) => (
          <article class="rounded-lg ring-1 ring-gray-200 shadow bg-white p-4">
            <img src={item.image} class="w-full" />
            <h2 class="font-medium text-lg py-2">{item.name}</h2>
            <p class="text-sm opacity-80 pb-2">
              {item.description}
            </p>
            <p class="font-semibold text-lg opacity-80 pb-2">
              ${item.price.slice(0, -2)}
            </p>
            <a href={`/item/${item.id}`}>View Item</a>
          </article>
        ))}
      </section>
    </>
  );
}
