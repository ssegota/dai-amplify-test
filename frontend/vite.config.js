import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000
  },

  // 🔥 Enable importing JSON files like amplify_outputs.json
  json: {
    stringify: true,
  },

  resolve: {
    dedupe: [
      "aws-amplify",
      "@aws-amplify/ui-react",
      "aws-amplify/data",
      "@aws-amplify/core",
    ],
  },
});
