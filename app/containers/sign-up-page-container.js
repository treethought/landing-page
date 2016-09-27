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
      formStage: 1,
      user: {
        data: {attributes: {dateOfBirthObj: {}}, relationships: {}}, // TODO: find a better way to deal with date, aside from dateOfBirthObj
        errors: {attributes: {}, relationships: {}}
      },
      contacts: [
        {
          tmpId: tmpContactId,
          data: {id: null, type: 'contacts', attributes: {isContactableByUs: true}, relationships: {}},
          errors: {attributes: {}, relationships: {}}
        }
      ],
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
      this.setState({
        formStage: 1,
        requestInProgress: false,
        user: {
          ...this.state.user,
          errors: {attributes: {}, relationships: {}}
        }
      })
      let userId = json.data.id
      let accessToken = json.data.relationships.accessToken.data.value.toString()
      cookie.save('userId', userId, {path: '/'})
      cookie.save('accessToken', accessToken, {path: '/'})
    }).catch((res) => {
      let {status, json} = res
      this.setState({
        requestInProgress: false,
        user: {...this.state.user, errors: json.errors}
      })
    })
  }

  setUser (propName) {
    return (e, i, v) => {
      // TODO: fix 'heardAboutUsThrough' case
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

  addContact () {
    this.setState({contacts: this.state.contacts.concat({
      tmpId: ++tmpContactId,
      data: {id: null, type: 'contacts', attributes: {isContactableByUs: true}, relationships: {}},
      errors: {attributes: {}, relationships: {}}
    })})
  }

  setContact (tmpId, propName) {
    return (e, i, v) => {
      let prop = propName === 'isContactableByUs' ? v : e.target.value
      let contacts = this.state.contacts.map((contact) => {
        if (contact.tmpId === tmpId) {
          contact.data.attributes[propName] = prop
        }
        return contact
      })
      this.setState({contacts: contacts})
    }
  }

  consentToContactIs () {
    return (e, isChecked) => {
      let contacts = this.state.contacts.map((contact) => {
        contact.data.attributes.isContactableByUs = isChecked
        return contact
      })
      this.setState({contacts: contacts})
    }
  }

  createContact (contact) {
    return fetcher({
      method: 'POST',
      url: `${config.apiBaseUrl}/contacts`,
      body: contact.data,
      beforeRequest: this.setState.call(this, {requestInProgress: true})
    }).then((res) => {
      let {status, json} = res
      this.setState({
        contacts: this.state.contacts.map((c) => {
          if (c.tmpId === contact.tmpId) {
            c.data.id = json.data.id
            c.errors = {attributes: {}, relationships: {}}
          }
          return c
        })
      })
    }).catch((res) => {
      let {status, json} = res
      this.setState({
        contacts: this.state.contacts.map((c) => {
          if (c.tmpId === contact.tmpId) { c.errors = json.errors}
          return c
        })
      })
      throw(new Error(json))
    })
  }

  updateContact (contact) {
    return fetcher({
      method: 'PATCH',
      url: `${config.apiBaseUrl}/contacts/${contact.data.id}`,
      body: contact.data,
      beforeRequest: this.setState.call(this, {requestInProgress: true})
    }).then((res) => {
      let {status, json} = res
      this.setState({
        contacts: this.state.contacts.map((c) => {
          if (c.tmpId === contact.tmpId) {
            c.errors = {attributes: {}, relationships: {}}
          }
          return c
        })
      })
    }).catch((res) => {
      let {status, json} = res
      this.setState({
        contacts: this.state.contacts.map((c) => {
          if (c.tmpId === contact.tmpId) { c.errors = json.errors}
          return c
        })
      })
      throw(new Error(json))
    })
  }

  saveContacts () {
    let createContactPromises = this.state.contacts.map((contact) => {
      if (contact.data.id) {
        return this.updateContact(contact)
      } else {
        return this.createContact(contact)
      }
    })

    Promise.all(createContactPromises).then(() => {
      this.setState({requestInProgress: false})
    }).catch(() => {
      this.setState({requestInProgress: false})
    })
  }

  removeContact (contact) {
    return () => {
      if (contact.data.id) {
        fetcher({
          method: 'DELETE',
          url: `${config.apiBaseUrl}/contacts/${contact.data.id}`,
          beforeRequest: this.setState.call(this, {requestInProgress: true})
        }).then((res) => {
          let contacts = this.state.contacts.filter((c) => c.tmpId !== contact.tmpId)
          this.setState({contacts: contacts, requestInProgress: false})
        }).catch((res) => {
          this.setState({contacts: contacts, requestInProgress: false})
          console.log('err: ', res.json)
        })
      } else {
        let contacts = this.state.contacts.filter((c) => c.tmpId !== contact.tmpId)
        this.setState({contacts: contacts})
      }
    }
  }

  render () {
    return (
      <SignUpPage
        {...this.state}
        location={this.props.location}
        setUser={this.setUser.bind(this)}
        createUser={this.createUser.bind(this)}
        setUserDateOfBirth={this.setUserDateOfBirth.bind(this)}
        setContact={this.setContact.bind(this)}
        addContact={this.addContact.bind(this)}
        saveContacts={this.saveContacts.bind(this)}
        removeContact={this.removeContact.bind(this)}
        consentToContactIs={this.consentToContactIs.bind(this)}
      />
    )
  }
}

export default SignUpPageContainer
