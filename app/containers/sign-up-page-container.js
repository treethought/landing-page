import React, {Component} from 'react'
import SignUpPage from './../components/sign-up-page'
import config from './../config'
import fetcher from './../services/fetcher'
import objectMap from 'object.map'
import {browserHistory} from 'react-router'
import moment from 'moment'
import cookie from 'react-cookie'

let tmpContactId = 0

class SignUpPageContainer extends Component {
  constructor () {
    super()
    this.state = {
      formStage: 0,
      user: {
        data: {attributes: {dateOfBirthObj: {}}, relationships: {}}, // TODO: find a better way to deal with date, aside from dateOfBirthObj
        errors: {attributes: {}, relationships: {}}
      },
      contacts: [{tmpId: tmpContactId}],
      requestInProgress: false
    }
  }

  createUser () {
    let {year, month, day} = this.state.user.data.attributes.dateOfBirthObj
    let dateOfBirth = moment(`${year}-${month}-${day}`, 'YYYY-M-D').format()
    fetcher({
      method: 'POST',
      url: `${config.apiBaseUrl}/users`,
      body: {
        type: "users",
        attributes: {...this.state.user.data.attributes, dateOfBirth: dateOfBirth}
      },
      beforeRequest: this.setState.call(this, {requestInProgress: true})
    }).then((res) => {
      let {status, json} = res
      this.setState({requestInProgress: false})
      if (status === 200) {
        // TODO: refactor?
        // this.setState({
        //   formStage: 1,
        //   user: {
        //     ...this.state.user,
        //     errors: {
        //       attributes: {},
        //       relationships: {}
        //     }
        //   }
        // })

        // TODO: pull into service?
        let userId = json.id
        let accessToken = json.relationships.accessToken.data.value
        cookie.save('userId', userId, {path: '/'})
        cookie.save('accessToken', accessToken, {path: '/'})
      } else {
        this.setState({
          user: {...this.state.user, errors: json.errors}
        })
      }
    })
  }

  setUser (propName) {
    return (e, i, v) => {
      let prop = propName === 'heardAboutUsThrough' ? v : e.target.value
      let updatedUser = this.state.user
      updatedUser.data.attributes[propName] = prop
      this.setState({user: updatedUser})
    }
  }

  setUserDateOfBirth (field) {
    return (e, i, v) => {
      let updatedDateOfBirthObj = this.state.user.data.attributes.dateOfBirthObj
      updatedDateOfBirthObj[field] = v
      let updatedUser = this.state.user
      updatedUser.data.attributes.dateOfBirthObj = updatedDateOfBirthObj
      this.setState({user: updatedUser})
    }
  }

  // addContact () {
  //   this.setState({contacts: this.state.contacts.concat({tmpId: ++tmpContactId})})
  // }
  //
  // setContact (tmpId, propName) {
  //   return (e, i, v) => {
  //     let prop = propName === 'isContactableByUs' ? v : e.target.value
  //     let contacts = this.state.contacts.map((contact) => {
  //       if (contact.tmpId === tmpId) { contact[propName] = prop }
  //       return contact
  //     })
  //     this.setState({ contacts: contacts })
  //   }
  // }
  //
  // consentToContactIs () {
  //   return (e, isChecked) => {
  //     let contacts = this.state.contacts.map((contact) => {
  //       contact.isContactableByUs = isChecked
  //       return contact
  //     })
  //     this.setState({contacts: contacts})
  //   }
  // }
  //
  // removeContact (tmpId) {
  //   return () => {
  //     let contacts = this.state.contacts.filter((contact) => contact.tmpId !== tmpId)
  //     this.setState({contacts: contacts})
  //   }
  // }
  //
  // saveContacts () {
  //   let form_token = this.state.user.form_token
  //   let form_token_value = form_token ? form_token.value : ''
  //
  //   fetcher({
  //     method: 'POST',
  //     url: `${config.apiBaseUrl}/contacts`,
  //     body: {
  //       contacts: {
  //         list: this.state.contacts,
  //         form_token_value: form_token_value,
  //         user_id: this.state.user.id
  //       }
  //     },
  //     beforeRequest: this.setState.call(this, {requestInProgress: true})
  //   }).then((res) => {
  //     let {status, json} = res
  //     if (status === 200) {
  //       this.setState({contactsFormErrors: {}, contacts: [], requestInProgress: false})
  //       browserHistory.push('/sign-up/success')
  //     } else {
  //       document.body.scrollTop = document.documentElement.scrollTop = 0
  //       this.setState({contactsFormErrors: json.errors, requestInProgress: false})
  //     }
  //   })
  // }

  render () {
    return (
      <SignUpPage
        {...this.state}
        location={this.props.location}
        setUser={this.setUser.bind(this)}
        createUser={this.createUser.bind(this)}
        setUserDateOfBirth={this.setUserDateOfBirth.bind(this)}
      />
    )
  }
}

export default SignUpPageContainer

// addContact={this.addContact.bind(this)}
// removeContact={this.removeContact.bind(this)}
// setContact={this.setContact.bind(this)}
// saveContacts={this.saveContacts.bind(this)}
// consentToContactIs={this.consentToContactIs.bind(this)}
