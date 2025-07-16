export default {
  target: 'static', 
  ssr: true,      
  generate: {
    fallback: true 
  },
  srcDir: 'src/',
  head: {
    title: 'Resa Pay',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js', integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj', crossorigin: 'anonymous' },
      { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js', integrity: 'sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN', crossorigin: 'anonymous' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js', integrity: 'sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV', crossorigin: 'anonymous' }
    ]
  },

  css: [
    'bootstrap/dist/css/bootstrap.css',
     '@/assets/css/custom.css'
  ],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL
    }
  }
}