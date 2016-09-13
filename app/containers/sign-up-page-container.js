import React, {Component} from 'react'
import SignUpPage from './../components/sign-up-page'
import config from './../config'
import fetcher from './../services/fetcher'
import objectMap from 'object.map'

let tmpContactId = 0

class SignUpPageContainer extends Component {
  constructor () {
    super()
    this.state = {formStage: 1, user: {}, userFormErrors: {}, contacts: [{tmpId: tmpContactId}], contactsFormErrors: [{}], formToken: {}}
  }

  createUser () {
    return fetcher({
      url: `${config.apiBaseUrl}/users`,
      method: 'POST',
      body: {user: this.state.user}
    }).then((res) => {
      let {status, json} = res
      if (status === 200) {
        this.setState({userFormErrors: {}, formToken: json.user.formToken, formStage: 1})
      } else {
        this.setState({
          userFormErrors: objectMap(json.errors, (v) => v.join(', '))
        })
      }
    })
  }

  setUser (propName) {
    return (e) => {
      let prop = e.target.value
      this.setState({
        user: {...this.state.user, [propName]: prop}
      })
    }
  }

  addContact () {
    this.setState({contacts: this.state.contacts.concat({tmpId: ++tmpContactId})})
  }

  setContact (tmpId, propName) {
    return (e) => {
      let prop = e.target.value
      let contacts = this.state.contacts.map((contact) => {
        if (contact.tmpId === tmpId) { contact[propName] = prop }
        return contact
      })
      this.setState({ contacts: contacts })
    }
  }

  removeContact (tmpId) {
    return () => {
      let contacts = this.state.contacts.filter((contact) => contact.tmpId !== tmpId)
      this.setState({contacts: contacts})
    }
  }

  render () {
    return (
      <SignUpPage
        {...this.state}
        setUser={this.setUser.bind(this)}
        createUser={this.createUser.bind(this)}
        addContact={this.addContact.bind(this)}
        removeContact={this.removeContact.bind(this)}
        setContact={this.setContact.bind(this)}
      />
    )
  }
}

export default SignUpPageContainer
