export const isDesktop = window.innerWidth > 740

export const lengthOfObject = (obj) => {
  return Object.keys(obj).length
}

export const scrollToTop = () => {
  window.scrollTo(0, 1)
}

export const sendMessageWithNextUrl = (prevState, nextState, replace, callback) => {
  // checks if we're in an iframe or not
  if (window.parent !== window) {
    const nextUrl = `https://goodcall.nyc${nextState.location.pathname}`
    window.parent.postMessage(nextUrl, 'https://labs.robinhood.org')
  } else {
    callback()
  }
}
