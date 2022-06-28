import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content','@nuxtjs/tailwindcss'],
  css: [
    '@/assets/css/main.css',
    '@/assets/css/prism-one-light.css'
  ]
})
