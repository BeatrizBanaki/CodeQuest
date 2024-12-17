import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "CodeQuest",
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Redireciona chamadas para o backend
    },
  },
});
