import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

// Convert `import.meta.url` to a `__dirname` equivalent
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Vite configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias '@' to './src' directory
    },
  },
});
