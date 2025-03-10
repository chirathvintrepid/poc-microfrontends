import { defineNuxtConfig } from "nuxt/config";
import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  experimental: {
    asyncEntry: true,
    externalVue: true,
  },
  vite: {
    plugins: [
      federation({
        name: "remoteApp",
        filename: "remoteEntry.js",
        exposes: {
          "./RemoteComponent": "./components/RemoteComponent.vue",
        },
        shared: ["vue"],
      }),
    ],
    build: {
      target: "esnext",
      minify: false,
      rollupOptions: {
        external: [],
      },
    },
  },
});
