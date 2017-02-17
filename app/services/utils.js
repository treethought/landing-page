export const isDesktop = window.innerWidth > 640

export const lengthOfObject = (obj) => {
  return Object.keys(obj).length
}

export const scrollToTop = () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0
}
