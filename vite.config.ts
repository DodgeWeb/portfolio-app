import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 현재 환경이 배포(production)인지 확인
const isProd = process.env.NODE_ENV === "production";

// https://vite.dev/config/
export default defineConfig({
  base: isProd ? "/portfolio-app/" : "/",
  plugins: [react()],
});
