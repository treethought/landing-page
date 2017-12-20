import { trackDonationEvent } from '../../services/ga'

const navBtns = content => [{
  label: content.faqBtnLabel,
  to: '/faq',
  className: 'nav-btn dark link',
  activeClassName: 'nav-btn-active'
}, {
  label: content.aboutUsBtnLabel,
  to: '/about-us',
  className: 'nav-btn dark link',
  activeClassName: 'nav-btn-active'
}, {
  label: content.donateBtnLabel,
  to: '/stub',
  onClick: e => {
    e.preventDefault()
    trackDonationEvent()
    window.location.href = 'https://creativevisions.networkforgood.com/projects/31964-creative-visions-fiscal-sponsorship-good-call'
  },
  className: 'nav-btn dark link',
  activeClassName: 'nav-btn-active'
}, {
  label: content.signUpBtnLabel,
  to: '/sign-up',
  className: 'sign-up-btn',
  selector: 'primary'
}]

export default navBtns
