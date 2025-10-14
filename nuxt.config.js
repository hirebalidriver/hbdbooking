export default {
  head: {
    title: "Most Popular Tours in Bali | Hire Bali Driver",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Hire Bali Driver",
      },
      {
        hid: "robots",
        name: "robots",
        content: "noindex, follow",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    script: [
      {
        hid: 'gtag',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-93Q8YKYLC8', // Ganti dengan Google Analytics ID Anda
        async: true
      },
      {
        hid: 'gtag-inline',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-93Q8YKYLC8', {
            'cookie_domain': 'auto'
          });
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      },
      {
        hid: 'clarity',
        innerHTML: `(function(c,l,a,r,i,t,y){
                      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "olwgiv83bx");`,
        type: 'text/javascript',
        charset: 'utf-8'
      },
      {
        hid: 'gtag-ads',
        src: 'https://www.googletagmanager.com/gtag/js?id=AW-11342937470',
        async: true
      },
      {
        hid: 'gtag-config',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11342937470');
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      },
      {
        hid: 'gtm',
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                     })(window,document,'script','dataLayer','GTM-MPMW5ZWF');`,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'gtag-inline': ['innerHTML'],
      clarity: ['innerHTML'],
      'gtag-config': ['innerHTML'],
      gtm: ['innerHTML']
    }
  },

  server: {
    port: 3000,
    host: '0.0.0.0' // Ini sangat penting untuk Docker
  },

  ssr: true,
  target: "server",

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/gtm-noscript.js", mode: "client" },
    { src: "~/plugins/currency.js", ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/moment",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  axios: {
    // proxy: true
    baseURL: process.env.NUXT_BASE_URL,
  },
};
