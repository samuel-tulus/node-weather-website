const request = require('request')

const forecast = (lat, lng, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d72c1382ebf44901d789c84e5a8b5d13&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(lng)

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to internet!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast