export const triggerEvent = (action, json = null) => () => {
  let payload = {
    hitType: 'event',
    eventCategory: 'sign-up-flow',
    eventAction: action
  }
  if (json) { payload.eventLabel = JSON.stringify(json) }
  console.log({ payload })
  window.ga('send', payload)
}
