import React from 'react'
import { Link } from 'react-router'

const Option = ({ content, to }) =>
  <Link to={to} className='sign-up-page__option'>
    <h3 className='sign-up-page__option-header'>{content.header}</h3>
    <p className='sign-up-page__option-details'>{content.details}</p>
  </Link>

const SignUpPage = props => {
  const { content } = props.route

  const options = [
    { content: content.options.userFlow, to: '/sign-up/user' },
    { content: content.options.ocFlow, to: '/sign-up/contact' }
  ]

  return (
    <div className='sign-up-page'>
      <h2 className='sign-up-page__header'>{content.header}</h2>
      <h3 className='sign-up-page__subheader'>{content.subheader}</h3>
      <div className='sign-up-page__options-container'>
        {options.map((o, i) => <Option {...o} key={i} />)}
      </div>
    </div>
  )
}

export default SignUpPage
