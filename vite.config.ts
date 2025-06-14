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
        }, 
        // "/example": {
        //   target: env.SOCKET_API_URL,
        //   ws: true,
        //   secure: false,
        //   rewrite: path => path.replace(/^\/example/, ""),
        //   configure: (proxy, _options) => {
            
        //     proxy.on("error", (err, _req, _res) => {
        //       console.log('proxy error', err);
        //     });
        //     proxy.on("proxyReq", (proxyReq, req, _res) => {
        //       console.log("Sending Request to the Target:", req.method, req.url);
        //     });
        //     proxy.on("proxyRes", (proxyRes, req, _res) => {
        //       console.log("Received Response from the Target:", proxyRes.statusCode, req.url);
        //     });
        //   },
        // }
      }
    },
    resolve: {
      alias: {
        styles: path.resolve(__dirname, "src/styles"), // Указываем алиас для "styles/"
      },
    },
  }
})
