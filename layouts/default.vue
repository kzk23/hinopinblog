<template>
  <Nuxt />
</template>
<script>
export default {
  head() {
    let productionScripts = []
    if (process.env.NODE_ENV === 'production') {
      productionScripts = [
        {
          hid: 'analytics',
          src: 'https://www.googletagmanager.com/gtag/js?id=UA-185639793-1',
          defer: true
        },
        {
          hid: 'analytics-script',
          innerHTML:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-185639793-1');",
          type: 'text/javascript'
        }
      ]
    }

    return {
      title: 'hinopin blog',
      script: [].concat(productionScripts),
      // __dangerouslyDisableSanitizers: ['script']
      __dangerouslyDisableSanitizersByTagID: {
        'analytics-script': ['innerHTML']
      }
    }
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
