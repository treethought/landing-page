const { ga } = window

export const trackRegistrationEvent = (action, json) => {
  let payload = { hitType: 'event', eventCategory: 'registration', eventAction: action }
  if (json) { payload.eventLabel = JSON.stringify(json) }
  ga('send', payload)
}

export const trackPageView = pathname => {
  ga('set', 'page', pathname)
  ga('send', 'pageview')
}

export const trackShareEvent = action => {
  ga('send', { hitType: 'event', eventCategory: 'share', eventAction: action })
}
