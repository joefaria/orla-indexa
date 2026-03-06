// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://indexa.com.br',
  output: 'static',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
})
