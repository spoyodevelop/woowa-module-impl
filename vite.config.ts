import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/woowa-module-impl/", // 예: '/my-app/'
  plugins: [react()],
});
