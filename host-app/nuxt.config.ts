import { defineNuxtConfig } from "nuxt/config";
import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  experimental: {
    asyncEntry: true,
    externalVue: true,
  },
  devtools: { enabled: true },
  vite: {
    plugins: [
      federation({
        name: "hostApp",
        remotes: {
          remoteApp: "http://localhost:3001/remoteEntry.js",
        },
        shared: ["vue"],
      }),
    ],
    build: {
      target: "esnext",
      minify: false,
    },
  },
});
