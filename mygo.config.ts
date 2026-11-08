// import { defineConfig } from "mygo-cli";

export default ({ command }: { command: string }) => ({
  name: "GPLauncher",
  identifier: "li.jad.gplauncher",
  version: "0.1.0",
  // `mygo dev` runs devCommand and loads devUrl; `mygo build` runs
  // buildCommand and embeds frontendDist into the app.
  devUrl: "http://localhost:4321",
  devCommand: "bun --filter website dev:web",
  buildCommand: "bun --filter website build:web",
  frontendDist: "dist",
  bindings: "website/src/mygo.ts",
  out: "build",
});
