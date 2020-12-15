const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=38bafa40e761e67ff9c3d383428bfd21&query=' + lat + ',' + long
    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location', undefined)
        } else {
            callback(undefined, 'Current Temperature: ' + body.current.temperature)
        }
    })
}

module.exports = forecast