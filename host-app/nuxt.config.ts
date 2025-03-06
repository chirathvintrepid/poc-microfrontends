import { defineNuxtConfig } from "nuxt/config";
import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  builder: "vite",
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
