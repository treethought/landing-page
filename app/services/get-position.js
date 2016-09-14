// from http://stackoverflow.com/a/24829409

const getPosition = (el) => {
  let x = 0, y = 0

  while (el) {
    x += (el.offsetLeft - el.scrollLeft + el.clientLeft)
    y += (el.offsetTop - el.scrollTop + el.clientTop)
    el = el.offsetParent
  }

  return { x: x, y: y }
}

export default getPosition
