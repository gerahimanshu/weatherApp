import React from 'react';

const Weather = (props) => (
    <div>
        {
            props.type === 'fiveDay' &&
            <h4>{formatDate(new Date(props.weather.dt_txt))}</h4>
        }
        <img src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`} alt="This is how weather looks like!"/>
        <h4>{props.weather.weather[0].main}</h4><br/>
        <span>{`${getTempInCelsius(props.weather.main.temp)}°C`}</span>
        <hr/>
    </div>
);

const formatDate = (date) => {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

const getTempInCelsius = (temp) => {
    return Math.floor(temp - 273.15)
}

export default Weather;