import api from './api'
const nasa_api_key = '29znLscTia9eMS7aL2DP9h2U6fL5U9AhKd19tsna'

export default {
apod (credentials) {
  //normally would send a cleaner request payload but NASA only accepts query string params
  return api('https://api.nasa.gov/').get(`/planetary/apod?api_key=${nasa_api_key}&date=${credentials.date}`)
  }
}
