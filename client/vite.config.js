import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { '@': '/src' } },
  plugins: [react()],
  server: {
    //host: '0.0.0.0',
    host: true,
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
  },
});