const env = process.env.NODE_ENV || 'development'
const isStaging = process.env.IS_STAGING

const environmentConfigs = {
  development: {
    apiBaseUrl: 'http://localhost:3000',
    stripePKey: 'pk_test_sDjBqpQMHRcGZT5wh2h29M6t'
  },
  production: {
    apiBaseUrl: isStaging ? 'https://good-call-nyc-staging-api.herokuapp.com' : 'https://good-call-nyc-api.herokuapp.com',
    stripePKey: 'pk_live_ZnC8NHJbhDT4WbqwsXqQ8vTj'
  }
}

const config = environmentConfigs[env]

export default config
