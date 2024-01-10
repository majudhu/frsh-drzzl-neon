import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="container">
      <nav class="container flex items-center gap-4 py-4">
        <a href="/" class="font-semibold">
          Home
        </a>
        <a href="https://github.com/majudhu/nuxt-ui-drzzl-neon" class="ml-auto">
          <img src="/github.svg" class="w-8 h-8" />
        </a>
      </nav>
      <Component />
    </div>
  );
}
