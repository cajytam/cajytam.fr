// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import keystatic from "@keystatic/astro";

const isDevMode = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  site: "https://cajytam.fr",
  output: "static",
  integrations: [
    icon({
      include: {
        "simple-icons": ["*"],
      },
    }),
    mdx(),
    ...(isDevMode ? [keystatic()] : []),
  ],
});
