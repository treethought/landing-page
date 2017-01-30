// import ga from './../../services/ga'

const triggerEvent = (action) => () => {
  console.log({action})
  window.ga('send', {
    hitType: 'event',
    eventCategory: 'sign-up-flow',
    eventAction: action
  })
}

const ga = {
  triggerEvent
}

export default ga
