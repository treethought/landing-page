// taken from https://codepen.io/fvsch/pen/MyyBXW

!(function () {
  // Run polyfill once on domready
  document.addEventListener('DOMContentLoaded', function () {
    objectFitFix(document)
  })
  // Expose it globally if we need to run it again for inserted content
  window.objectFitFix = objectFitFix

  /** Polyfill images in a container if needed */
  function objectFitFix (container) {
    if (typeof container !== 'object') return
    var hasObjectFit = 'objectFit' in document.documentElement.style
    var hasObjectPos = 'objectPosition' in document.documentElement.style
    var positionText = /(\s|^)(left|right|top|bottom)(\s|$)/
    var imageSelector = 'img[data-fit~="cover"], img[data-fit~="contain"]'
    if (!hasObjectFit) {
      Array.prototype.forEach.call(container.querySelectorAll(imageSelector), srcToBg)
    } else if (!hasObjectPos) {
      Array.prototype.forEach.call(container.querySelectorAll(imageSelector), function (image) {
        if (positionText.test(image.getAttribute('data-fit'))) { srcToBg(image) }
      })
    }
  }

  /** Insert image src as its background-image */
  function srcToBg (image) {
    // Only run once per image
    if (!image.hasAttribute('data-fitted')) {
      var src = image.currentSrc || image.src
      image.style.backgroundImage = 'url("' + src + '")'
      // A bit ugly but srcset might override our src attribute otherwise
      image.removeAttribute('srcset')
      image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E'
      image.setAttribute('data-fitted', '')
    }
  }
}())
