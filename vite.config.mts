import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    VueRouter(), // Sin la opción `lazy`
    Vue({
      template: { transformAssetUrls },
    }),
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    Components(),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900',
          },
        ],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    exclude: [
      'chunk-2PSLV3PF.js',
      'chunk-G43XNJK2.js',
      'chunk-IX37MPFH.js',
      'chunk-2VU3HPIM.js',
      'chunk-CR7UY6XW.js',
      'chunk-5HFKIUXG.js',
    ],
  },
  assetsInclude: ['**/*.PNG', '**/*.jpg', '**/*.jpeg', '**/*.svg'], // Incluye múltiples tipos de archivos
})
