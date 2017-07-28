import { trackDonationEvent } from '../../services/ga'

const navBtns = content => [{
  label: content.faqBtnLabel,
  to: '/faq',
  className: 'header__nav-btn',
  activeClassName: 'header__nav-btn-active'
}, {
  label: content.aboutUsBtnLabel,
  to: '/about-us',
  className: 'header__nav-btn',
  activeClassName: 'header__nav-btn-active'
}, {
  label: content.donateBtnLabel,
  to: '/stub',
  onClick: e => {
    e.preventDefault()
    trackDonationEvent()
    window.location.href = 'https://igg.me/at/C42BDfXWM58'
  },
  className: 'header__nav-btn',
  activeClassName: 'header__nav-btn-active'
}, {
  label: content.signUpBtnLabel,
  to: '/sign-up',
  className: 'gc-std-btn header__sign-up-btn'
}]

export default navBtns
