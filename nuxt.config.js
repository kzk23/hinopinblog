const GAID = 'UA-185639793-1'
const GAcode = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GAID}');`

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: 'true',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'hinopin blog'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.hinopin.com' },
      { hid: 'og:title', property: 'og:title', content: 'hinopin blog' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'print("hello,my world")'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://user-images.githubusercontent.com/45329260/102309991-674e2a00-3fad-11eb-9940-662866ae7b8e.jpg'
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'fb:app_id', content: '797068250841399' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.3.0/font-awesome-animation.min.css'
      }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/4fabd64d96.js' },
      {
        hid: 'GAsrc',
        src: 'https://www.googletagmanager.com/gtag/js?id=' + GAID
      },
      {
        hid: 'GAcode',
        innerHTML: GAcode
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      GAsrc: ['innerHTML'],
      GAcode: ['innerHTML']
    }
  },
  /*
   ** Global CSS
   */
  css: ['github-markdown-css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // pwa
    '@nuxtjs/pwa'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/bulma',
    'nuxt-buefy',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-adsense',
      {
        id: 'ca-pub-9731646793848693'
      }
    ]
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },
  sitemap: {
    hostname: 'https://hinopin.com',
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const articles = await $content('articles').only(['path']).fetch()

      return articles.map((article) => article.path)
    }
  },
  pwa: {
    meta: {
      appleStatusBarStyle: 'black-translucent',
      mobileAppIOS: true
    }
  },
  bluma: {
    defaultAssets: false
  },
  buefy: {
    defaultAssets: false
  },
  markdown: {
    lineNumbers: true,
    linkify: true,
    config: (md) => {
      md.use(
        require('markdown-it-footnote', 'markdown-it-abbr', 'markdown-it-mark', 'markdown-it-video', 'markdown-it-block-embed')
      )
    }
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
}
