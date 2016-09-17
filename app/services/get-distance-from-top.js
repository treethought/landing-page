// from http://stackoverflow.com/a/24829409

const getDistanceFromTop = (el) => {
  let y = 0

  while (el) {
    y += el.offsetTop
    el = el.offsetParent
  }

  return y
}

export default getDistanceFromTop
