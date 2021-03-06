const axios = require('axios')

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?&units=metric&appid=66ea3c66268a241e3b153fe87da9566c'

module.exports = {
    getTemp: (location) => {
    let encodedLocation = encodeURIComponent(location) // to wash off spaces and other characters
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`
    return axios.get(requestUrl)
    .then((response) => {
      if(response.data.list.length === 0){
        throw new Error(response.data.message)
      } else {
        return response.data.list[0].main.temp
      }
    })
    .catch((err) => {throw new Error(response.data.message)})
  }
}
