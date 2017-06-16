import config from '../config'
const { StripeCheckout } = window
import { createCharge } from './api'

const Checkout = amount => {
  const dollarAmount = amount * 100

  const handler = StripeCheckout.configure({
    key: config.stripePKey,
    image: '/assets/imgs/stripe-donate-icon.png',
    name: 'Good Call',
    description: '100% of your donation goes to fighting for justice',
    locale: 'auto',
    zipCode: true,
    panelLabel: 'Donate',
    allowRememberMe: false,
    token: token => {
      createCharge({ token, amount })
    }
  })

  handler.open({ amount: dollarAmount })
}

export default Checkout
