import { defineConfig, mergeConfig } from 'vitest/config'
import { viteConfig } from './vite.config'

export default defineConfig(configEnv => mergeConfig(
  viteConfig(configEnv),
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
      css: true,
      reporters: ['verbose'],
      coverage: {
        reporter: ['text', 'json', 'html'],
        include: ['src/**/*'],
        exclude: ['packages/template/*'],
    },
  }})
))