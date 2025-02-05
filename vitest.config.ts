import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom', // mock browser environment with jsdom
    globals: true, // to use global variables like describe, it, expect without importing
    setupFiles: './src/setupFiles.ts', // File to setup testing configurations
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx', 'src/**/*.test.js'], // Define test files
    exclude: [...configDefaults.exclude, 'packages/template/*'], //exclude node_modules, .git and packages/template files if any
  },
  resolve: {
    alias: {
      core: '/src/core',
      shared: '/src/shared',
      pages: '/src/pages',
      features: '/src/features',
      types: '/src/types',
      // Default fallback for unmatched paths
      '*': '/src/*',
    },
  },
})
