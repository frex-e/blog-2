import { readdir, readdirSync } from 'fs'
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
const files = readdirSync('./pages/blog/').map(file => "/blog/" + file.replace('.vue', ''))
files.push('/','/blog')

export default defineNuxtConfig({
  modules: ['@nuxt/content','@nuxtjs/tailwindcss'],
  css: [
    '@/assets/css/main.css',
    '@/assets/css/prism-one-light.css'
  ],
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    }
  },
  // target: 'static',
  ssr: false,
  nitro: {
    prerender: {
      routes: files
    }
  }
})
