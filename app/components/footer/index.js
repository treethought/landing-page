import React from 'react'
import { Link } from 'react-router'

const Footer = ({ content }) => {
  const goToDonationPage = e => {
    e.preventDefault()
    window.location.href = 'https://www.generosity.com/community-fundraising/good-call-everyone-deserves-fairness'
  }

  const navLinks = [
    { to: '/sign-up', label: 'signUpLabel' },
    { to: '/about-us', label: 'aboutUsLinkLabel' },
    { to: '/faq', label: 'faqLinkLabel' },
    { to: '/stub', onClick: goToDonationPage, label: 'donateBtnLabel' },
    { to: '/privacy-policy', label: 'privacyPolicyLinkLabel' },
    { to: '/terms-and-conditions', label: 'termsAndConditionsLinkLabel' }
  ]

  const socialLinks = [
    { href: 'https://www.facebook.com/goodcallnyc', src: '/assets/imgs/facebook_icon.svg' },
    { href: 'https://twitter.com/GoodCallNYC', src: '/assets/imgs/twitter_icon.svg' },
    { href: 'https://www.instagram.com/goodcallnyc', src: '/assets/imgs/instagram_icon.svg' }
  ]

  return (
    <footer className='footer'>
      <img src='/assets/imgs/logo-dark.png' className='logo' />
      <a href='mailto:hello@goodcall.nyc' className='footer-link'>hello@goodcall.nyc</a>
      <address>
        <a
          href='https://www.google.com/maps?q=150+Court+St.+2nd+Floor,+Brooklyn+11201'
          className='footer-link'
        >
          {content.address}
        </a>
      </address>

      <div className='site-nav'>
        <div className='links-header footer-link'>Site Navigation</div>
        {navLinks.map(({ to, label, onClick }) => (
          <Link to={to} key={label} onClick={onClick} className='footer-link'>
            {content[label]}
          </Link>
        ))}
      </div>

      <div className='follow-us'>
        <div className='links-header footer-link'>Follow Us</div>
        <div className='social-links'>
          {socialLinks.map(({ href, src }) => (
            <a href={href} className='social-link' key={src}>
              <img src={src} className='social-media-logo' />
            </a>
          ))}
        </div>
      </div>

      <form className='mailing-list-form'>
        <input
          className='mailing-list-input'
          placeholder='Email address'
        />
        <input className='mailing-list-button' type='submit' value='>' />
      </form>

      <div className='non-profit'>
        Good Call is a fiscally sponsored not-for-profit 501(c)(3)
      </div>
    </footer>
  )
}

export default Footer
