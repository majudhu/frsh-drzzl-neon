import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "https://deno.land/x/postgresjs@v3.4.3/mod.js";

const client = postgres(Deno.env.get("DATABASE_URL"));

export const db = drizzle(client);
