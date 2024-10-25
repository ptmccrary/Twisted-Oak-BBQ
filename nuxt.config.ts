// https://nuxt.com/docs/api/configuration/nuxt-config
const TITLE = 'Twisted Oak BBQ'
const DESC =
  'Twisted Oak BBQ is a family owned and operated BBQ restaurant in Charlottesville, VA. We offer a variety of smoked meats, sides, and desserts.'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  content: {
    markdown: {
      anchorLinks: {
        depth: 3
      }
    }
  },
  css: ['~/assets/scss/main.scss'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@vueuse/nuxt'
  ],
  runtimeConfig: {
    public: {
      appSitename: TITLE,
      appDesc: DESC
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "~/assets/scss/base/_breakpoints.scss" as *;'
        }
      }
    }
  }
})
