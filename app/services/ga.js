const triggerEvent = (action, json = null) => () => {
  let payload = {
    hitType: 'event',
    eventCategory: 'sign-up-flow',
    eventAction: action
  }
  if (json) { payload.eventLabel = JSON.stringify(json) }
  window.ga('send', payload)
}

const ga = {
  triggerEvent
}

export default ga
