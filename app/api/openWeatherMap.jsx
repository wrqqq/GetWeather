var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d3a4e4d653e49c3a8de70e5599379a51&units=metric';

//d3a4e4d653e49c3a8de70e5599379a51

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location)
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		console.log(requestUrl);

		return axios.get(requestUrl).then(function(res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message)
			} else {
				return res.data.main.temp;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	}
}