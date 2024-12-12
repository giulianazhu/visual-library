import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  envDir: './.env',
  plugins: [
    react(),
    // support for legacy browsers
    legacy({ targets: ['defaults', 'not IE 11'] }),
    // allow mapping paths from tsconfig.json / tsconfig.app.json
    tsconfigPaths(),
  ],
  build: {
    emptyOutDir: true, // empty the dist directory before building
    outDir: 'dist', // dist = default output directory
    rollupOptions: {
      output: {
        // e.g. node_modules/lodash/index.js → Chunk named lodash.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
