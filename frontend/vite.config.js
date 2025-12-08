// frontend/vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { 
    port: 3000 
  },
  
  // CRITICAL FIX: The resolve block tells Rollup where the browser-compatible 
  // files are located inside the aws-amplify package structure.
  resolve: {
    alias: {
      // 1. Ensures the browser-compatible runtime configuration is used
      './runtimeConfig': './runtimeConfig.browser',
      
      // 2. Fixes the 'aws-amplify/data' ENOENT error
      // It points to the index file inside the modular folder structure.
      'aws-amplify/data': 'aws-amplify/dist/esm/data/index',

      // (Highly Recommended) Add aliases for other modular packages you may use
      'aws-amplify/auth': 'aws-amplify/dist/esm/auth/index',
      'aws-amplify/core': 'aws-amplify/dist/esm/core/index',
      'aws-amplify': 'aws-amplify/dist/esm/index', 
    },
  },
});
