import { trackDonationEvent } from '../../services/ga'

const navBtns = content => [{
  label: 'Sign our petition to bring Good Call to all of NYC!',
  onClick: e => {
    e.preventDefault()
    window.location.href = 'https://www.change.org/p/new-york-city-council-good4nyc-five-boroughs-one-hotline-for-justice-ddee9e6c-3ef3-4881-a21c-d24b768f4403'
  },
  className: 'nav-btn dark link nav-petition-link'
}, {
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
