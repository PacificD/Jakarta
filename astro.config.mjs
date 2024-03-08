import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import AutoImport from "astro-auto-import";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [
        /**
         * Generates:
         * import Intro from './src/components/Intro.astro';
         */
        "./src/components/Intro.astro",
        "./src/components/Note.astro",
        /**
         * Generates:
         * import { Tweet, YouTube } from 'astro-embed';
         */
        { "astro-embed": ["YouTube"] },
      ],
    }),
    react(),
    mdx(),
    tailwind(),
  ],
});

