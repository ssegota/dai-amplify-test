import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },

  // ✔ THIS IS THE CORRECT FIX FOR AMPLIFY GEN 2
  resolve: {
    dedupe: [
      "aws-amplify",
      "@aws-amplify/ui-react",
      "aws-amplify/data",
      "@aws-amplify/core"
    ],
  },
});
