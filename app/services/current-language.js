import cookie from 'react-cookie'

const currentLanguage = {
  get: () => {
    return cookie.load('currentLanguage', {path: '/'}) || 'en'
  },
  set: (language) => {
    cookie.save('currentLanguage', language, {path: '/'})
  }
}

export default currentLanguage
