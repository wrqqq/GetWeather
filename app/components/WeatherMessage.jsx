var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
			<p>In {location} temperature is {temp}</p>
	)	
}
module.exports = WeatherMessage;

