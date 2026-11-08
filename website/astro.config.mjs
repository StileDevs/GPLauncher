// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  output: "static",
  outDir: "../dist",

  vite: {
    plugins: [tailwindcss()],
    server: {
      port: 4321,
      strictPort: true,
      // The development app and the packaged builds are not the page's.
      watch: { ignored: ["**/.mygo/**", "**/build/**"] },
    }
  },

  integrations: [react()]
});