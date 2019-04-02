try {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments) }
    window.gtag = gtag
    window.gtag('js', new Date());

    window.gtag('config', 'UA-77360862-1');
} catch (e) {
    console.warn('Rendering on server, no window object')
}