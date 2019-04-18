try {
  window.dataLayer = window.dataLayer || []

  function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag = gtag
  window.gtag('js', new Date())

  window.gtag('config', 'UA-77360862-1')

  window.gaTrack = function(event, eventData) {
    if (window.ga) {
      window.ga('send', event, eventData)
    }
  }

} catch (e) {
  console.warn('Rendering on server, no window object')
}