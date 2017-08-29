import React from 'react'
import { bool, func, object, string } from 'prop-types'
import { Link } from 'react-router'

const Footer = ({ content, subscribedToMailingList, subscribeToMailingList, error, setEmail }) => {
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
      <div className='content'>
        <div className='main'>
          <div className='meta'>
            <img src='/assets/imgs/logo-dark.png' className='logo' />
            <a href='mailto:hello@goodcall.nyc' className='footer-link green-on-hover'>hello@goodcall.nyc</a>
            <address>
              <a
                href='https://www.google.com/maps?q=150+Court+St.+2nd+Floor,+Brooklyn+11201'
                className='footer-link green-on-hover'
              >
                {content.address}
              </a>
            </address>
          </div>

          <div className='site-nav'>
            <div className='footer-link links-header'>{content.siteNavHeader}</div>
            {navLinks.map(({ to, label, onClick }) => (
              <Link to={to} key={label} onClick={onClick} className='footer-link green-on-hover'>
                {content[label]}
              </Link>
            ))}
          </div>

          <div className='follow-us'>
            <div className='footer-link links-header'>{content.followHeader}</div>
            <div className='social-links'>
              {socialLinks.map(({ href, src }) => (
                <a href={href} className='social-link' key={src}>
                  <img src={src} className='social-media-logo' />
                </a>
              ))}
            </div>

            {subscribedToMailingList ? (
              <div>{content.subscriptionConfirm}</div>
            ) : (
              <form className='mailing-list-form'>
                <div className='inputs'>
                  <input
                    className='mailing-list-input'
                    placeholder={content.emailAddress}
                    onChange={setEmail}
                  />
                  <div className='mailing-list-button' onClick={subscribeToMailingList}>
                    <img src='/assets/imgs/subscribe-arrow.svg' />
                  </div>
                </div>
                {error && <div className='error'>{error}</div>}
              </form>
            )}
          </div>
        </div>

        <div className='non-profit'>
          {content.nonProfit}
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  content: object,
  email: string,
  error: string,
  subscribedToMailingList: bool,
  subscribeToMailingList: func
}

export default Footer
