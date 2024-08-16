import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 8192,
      deleteOriginFile: false, // Use deleteOriginFile instead of deleteOriginalAssets
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
