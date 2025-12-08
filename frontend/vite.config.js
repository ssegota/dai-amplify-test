// frontend/vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { 
    port: 3000 
  },
  
  // This 'resolve' block is critical for Amplify Gen 2 with Vite
  resolve: {
    alias: {
      // 1. Original fix for base runtime config
      './runtimeConfig': './runtimeConfig.browser',
      
      // 👇 ADD THESE NEW ALIAS ENTRIES 👇
      // 2. Resolve the core Amplify data package to its browser-specific entry point
      'aws-amplify/data': 'aws-amplify/dist/esm/data',

      // 3. (Highly Recommended) Resolve other necessary modular packages
      'aws-amplify/auth': 'aws-amplify/dist/esm/auth',
      'aws-amplify/core': 'aws-amplify/dist/esm/core',
      'aws-amplify': 'aws-amplify/dist/esm/index', 
      
      // 4. (Optional but good practice) Add a resolver for the configuration file
      './aws-exports.js': './aws-exports.js', 
    },
  },
});
