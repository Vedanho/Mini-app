import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "src/styles"), // Указываем алиас для "styles/"
    },
  },
})
