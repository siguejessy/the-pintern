import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from "tailwindcss";


export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: './',
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [
      react(),
      svgr({
        include: [
          'src/**/*.svg',
        ],
      }),
    ],
      css: {
        postcss: {
        plugins: [tailwindcss()],
        },
      },
    assetsInclude: ['**/*.m4v'], //irrelevant for now, keeping for future reference, might help for importing into components
  };
});

// We need to import SVG files as React component, as below:
// Component.jsx - ex: import Icon from './icon.svg?react'.
