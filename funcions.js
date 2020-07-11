var funcions = funcions || {}

funcions.preloadImages = function (imageSources) {
    imageSources.forEach(i => {
    const linkEl = document.createElement('link');
linkEl.setAttribute('rel', 'preload');
linkEl.setAttribute('href', i);
linkEl.setAttribute('as', 'image');
document.head.appendChild(linkEl);
});
}

funcions.getCulture = function () {
    return (navigator.languages && navigator.languages.length) ? navigator.languages[0] :
        navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
}