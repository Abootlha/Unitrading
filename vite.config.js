import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Manually split vendor chunk
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Increase chunk size warning limit to 1000 kB
    chunkSizeWarningLimit: 1000,
    // Optional: specify output directory
    outDir: 'dist',
  },
});
