const env = process.env.NODE_ENV || 'development'

const environmentConfigs = {
  development: {
    apiBaseUrl: 'http://localhost:3000'
  },
  staging: {
    apiBaseUrl: 'https://good-call-nyc-staging-api.herokuapp.com'
  },
  production: {
    apiBaseUrl: 'https://good-call-nyc-api.herokuapp.com'
  }
}

const config = environmentConfigs[env]

export default config
