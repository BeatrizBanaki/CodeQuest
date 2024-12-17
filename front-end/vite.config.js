import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "CodeQuest",
  server: {
    proxy: {
      '/api': 'http://52.67.153.90:3000', // Redireciona chamadas para o backend
    },
  },
});
