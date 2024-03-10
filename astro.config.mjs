import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://regal-speculoos-6e0875.netlify.app/",
  integrations: [preact(), tailwind(), alpinejs()],
});
