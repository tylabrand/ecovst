import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Configure the server to handle client-side routing
    historyApiFallback: true,
  },
  preview: {
    // Configure the preview server to handle client-side routing
    historyApiFallback: true,
  },
});
