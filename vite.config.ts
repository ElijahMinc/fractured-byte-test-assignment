import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // FSD
      '@app': path.resolve('src/app'),
      '@pages': path.resolve('src/pages'),
      '@widgets': path.resolve('src/widgets'),
      '@entities': path.resolve('src/entities'),
      '@features': path.resolve('src/features'),
      '@shared': path.resolve('src/shared'),
    },
  },
});
