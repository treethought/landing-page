// import ga from './../../services/ga'

const triggerEvent = (action) => () => {
  window.ga('send', {
    hitType: 'event',
    eventCategory: 'sign-up-flow',
    eventAction: action
  })
}

export default {
  triggerEvent
}
