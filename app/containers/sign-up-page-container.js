import React, {Component} from 'react'
import SignUpPage from './../components/sign-up-page'
import config from './../config'
import fetcher from './../services/fetcher'
import objectMap from 'object.map'
import cookie from 'react-cookie'

let tmpContactId = 0

class SignUpPageContainer extends Component {
  constructor () {
    super()
    this.state = {formStage: 0, user: {}, requestInProgress: false, userFormErrors: {}, contacts: [{tmpId: tmpContactId}], contactsFormErrors: [{}]}
  }

  createUser () {
    fetcher({
      url: `${config.apiBaseUrl}/users`,
      method: 'POST',
      body: {user: this.state.user},
      first: this.setState.call(this, {requestInProgress: true})
    }).then((res) => {
      let {status, json} = res
      if (status === 200) {
        this.setState({user: json.user, userFormErrors: {}, formStage: 1, requestInProgress: false})
        cookie.save('formTokenValue', json.user.form_token.value)
      } else {
        this.setState({
          userFormErrors: objectMap(json.errors, (v) => v.join(', ')),
          requestInProgress: false
        })
      }
    })
  }

  setUser (propName) {
    return (e, i, v) => {
      let prop = propName === 'heardAboutUsThrough' ? v : e.target.value
      this.setState({
        user: {...this.state.user, [propName]: prop}
      })
    }
  }

  addContact () {
    this.setState({contacts: this.state.contacts.concat({tmpId: ++tmpContactId})})
  }

  setContact (tmpId, propName) {
    return (e, i, v) => {
      let prop = propName === 'isContactableByUs' ? v : e.target.value
      let contacts = this.state.contacts.map((contact) => {
        if (contact.tmpId === tmpId) { contact[propName] = prop }
        return contact
      })
      this.setState({ contacts: contacts })
    }
  }

  consentToContactIs () {
    return (e, isChecked) => {
      let contacts = this.state.contacts.map((contact) => {
        contact.isContactableByUs = isChecked
        return contact
      })
      this.setState({contacts: contacts})
    }
  }

  removeContact (tmpId) {
    return () => {
      let contacts = this.state.contacts.filter((contact) => contact.tmpId !== tmpId)
      this.setState({contacts: contacts})
    }
  }

  saveContacts () {
    fetcher({
      url: `${config.apiBaseUrl}/contacts`,
      method: 'POST',
      body: {
        contacts: {
          list: this.state.contacts,
          form_token_value: cookie.load('formTokenValue'),
          user_id: this.state.user.id
        }
      },
      first: this.setState.call(this, {requestInProgress: true})
    }).then((res) => {
      let {status, json} = res
      if (status === 200) {
        this.setState({contactsFormErrors: {}, contacts: [], formStage: 2, requestInProgress: false})
        cookie.remove('formTokenValue')
      } else {
        this.setState({contactFormErrors: json.errors, requestInProgress: false})
      }
    })
  }

  render () {
    return (
      <SignUpPage
        {...this.state}
        location={this.props.location}
        setUser={this.setUser.bind(this)}
        createUser={this.createUser.bind(this)}
        addContact={this.addContact.bind(this)}
        removeContact={this.removeContact.bind(this)}
        setContact={this.setContact.bind(this)}
        saveContacts={this.saveContacts.bind(this)}
        consentToContactIs={this.consentToContactIs.bind(this)}
      />
    )
  }
}

export default SignUpPageContainer
