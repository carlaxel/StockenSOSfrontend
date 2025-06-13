import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.{jsx,tsx,js,ts,svg}",
    }),
    svgr(),
  ],
  server: {
    port: 3000,
    https: {
      key: fs.readFileSync(".cert/key.pem"),
      cert: fs.readFileSync(".cert/cert.pem"),
    },
    proxy: {
      "/api-v1": {
        target: "https://test.stockensos.se",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
