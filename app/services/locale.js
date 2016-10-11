import cookie from 'react-cookie'

const locale = {
  get: () => {
    return cookie.load('locale', {path: '/'}) || 'en'
  },
  set: (language) => {
    cookie.save('locale', language, {path: '/'})
  }
}

export default locale
