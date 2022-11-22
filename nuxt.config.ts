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
    head: {
    //   titleTemplate: '%s - Indra Kusumah-Kasim'
      // link: [
      //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // ]
    }
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
