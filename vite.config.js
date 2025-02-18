import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible';
import macrosPlugin from 'vite-plugin-babel-macros'
import svgrPlugin from 'vite-plugin-svgr'
import tailwindcss from 'tailwindcss'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    envCompatible(),
    macrosPlugin(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})
