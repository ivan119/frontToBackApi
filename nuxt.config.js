
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  auth:{
    strategies:{
      local:{
        endpoints:{
          login: { url: 'http://127.0.0.1:3333/users/login', method: 'post', propertyName: 'token' },
       // logout: { url: '/api/auth/logout', method: 'delete' },
          user: { url: 'http://127.0.0.1:3333/users/getuser' , method: 'get', propertyName: 'data' },
       //   logout: false
        },
       // tokenType:''
      }
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  axios: {
    // proxyHeaders: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    
    extend (config, ctx) {
    }
  }
}
