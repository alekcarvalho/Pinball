const resolve = require('path').resolve
const envv = process.env.NODE_ENV === 'dev' ? '/' : '/pinball'

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'pt-br',
    },
    titleTemplate: '%s | Nuxt-webapp',
    title: 'Welcome Nuxt-webapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hotsite - Fechadura Digital' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${envv}favicons/favicon.ico` },
      { rel: 'apple-touch-ico', type: 'image/x-icon', href: `${envv}favicons/apple-touch-icon.png` },
      { rel: 'icon', type: 'image/x-icon', href: `${envv}favicons/favicon-32x32.png` },
      { rel: 'icon', type: 'image/x-icon', href: `${envv}favicons/favicon-16x16.png` },
      { rel: 'manifest', type: 'image/x-icon', href: `${envv}favicons/manifest.json` },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.2/css/all.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1DAEEC' },
  /*
  ** Custom route for production host (if in subfolder) Caso o projeto esteja na raiz do servidor comentar o comando abaixo
  //put this in package.json : "dev": "NODE_ENV=dev nuxt"
  */
  router: {
    base: envv
  },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/assets/',
    vendor: ['babel-polyfill', 'axios'],
    /*
    ** Run ESLint on save
    */
    
    /*
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
    */
    
  },
  /* Import Buefy */
  plugins: [
    '~plugins/buefy',
    { src: '~plugins/vue-masonry', ssr: false }
  ],
  /* Import My sass */
  css: [
    // SCSS file in the project
    '@/assets/css/base.scss',
    //'font-awesome/css/font-awesome.css',
  ],
  modules: [
    'nuxt-sass-resources-loader'
  ],
  sassResources: [
    resolve(__dirname, 'assets/css/vars.scss'),
    resolve(__dirname, 'assets/css/mixins.scss')
  ]
}
