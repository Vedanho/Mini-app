import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), svgr()],
    define: {
      "process.env": env,
    },
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: env.API_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ""),
        }
      }
    },
    resolve: {
      alias: {
        styles: path.resolve(__dirname, "src/styles"), // Указываем алиас для "styles/"
      },
    },
  }
})
