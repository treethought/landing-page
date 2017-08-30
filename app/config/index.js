const env = process.env.NODE_ENV || 'development'
const isStaging = process.env.IS_STAGING
const useIE = process.env.USE_IE

const environmentConfigs = {
  development: {
    apiBaseUrl: useIE ? 'http://10.0.2.2:3000' : 'http://localhost:3000'
  },
  production: {
    apiBaseUrl: isStaging ? 'https://good-call-nyc-staging-api.herokuapp.com' : 'https://good-call-nyc-api.herokuapp.com'
  }
}

const config = environmentConfigs[env]

export default config
