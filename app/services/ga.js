const { ga } = window

export const triggerEvent = (action, json = null) => () => {
  let payload = {
    hitType: 'event',
    eventCategory: 'sign-up-flow',
    eventAction: action
  }
  if (json) { payload.eventLabel = JSON.stringify(json) }
  console.log({ payload })
  ga('send', payload)
}

export const trackPageView = (pathname) => {
  ga('set', 'page', pathname)
  ga('send', 'pageview')
}
