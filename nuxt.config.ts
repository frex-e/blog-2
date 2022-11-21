// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.less', '~/assets/code.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    // head: {
    //   titleTemplate: '%s - Indra Kusumah-Kasim'
    // }
  },
  modules: [
    ['@nuxtjs/google-fonts']
  ],
  googleFonts: {
    download: true,
    families: {
      'Comic+Neue': true,
      'Fira+Mono': true,
    }
  },
})
