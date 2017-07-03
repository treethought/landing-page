const { ga } = window

export const trackRegistrationEvent = (actor = null, action, json = null) => {
  let payload = {
    hitType: 'event',
    eventCategory: actor ? `${actor}-reg` : 'reg',
    eventAction: action
  }
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

export const trackDonationEvent = () => {
  ga('send', { hitType: 'event', eventCategory: 'donate', eventAction: 'click' })
}
