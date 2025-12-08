// frontend/vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  // This 'resolve' block is necessary to guide Rollup/Vite 
  // to correctly find the sub-path imports like 'aws-amplify/data' 
  // in the production build environment.
  resolve: {
    alias: {
      // Directs the bundler to the browser-compatible runtime configuration 
      // instead of the Node.js specific one.
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
});
