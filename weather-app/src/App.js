import logo from './logo.svg';
import './App.css';

function translator(text){
  if(text == "clearsky_day"||text == "clearsky_night"||text == "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text == "fair_day"||text == "fair_night"||text == "fair_polartwilight"){
      return "Fair"
  }else if(text == "partlycloudy_day"||text == "partlycloudy_night"||text == "partlycloudy_polartwilight"){
      return "Partly Cloudy"
  }else if(text == "cloudy"){
      return "Cloudy"
  }else if(text == "clearsky_day"||text == "clearsky_night"||text == "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text == "clearsky_day"||text == "clearsky_night"||text == "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text == "clearsky_day"||text == "clearsky_night"||text == "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text == "clearsky_day"||text == "clearsky_night"||text == "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text == "clearsky_day"||text == "clearsky_night"||text == "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text == "clearsky_day"||text == "clearsky_night"||text == "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text == "clearsky_day"||text == "clearsky_night"||text == "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text == "clearsky_day"||text == "clearsky_night"||text == "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text == "clearsky_day"||text == "clearsky_night"||text == "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text == "clearsky_day"||text == "clearsky_night"||text == "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text == "clearsky_day"||text == "clearsky_night"||text == "clearsky_polartwilight"){
      return "Clear sky"
  }
}

function App() {
  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
  }
  const apiUrl = `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
  fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
          throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(myObj => {
          console.log(myObj)
          var day = 0;
          var i = 0;
          const d = new Date()
          console.log(d)
          let control = `0${d.getMonth()+1}-0${d.getDate()+2}`
          myObj.properties.timeseries.forEach(element => {
              var time = element.time
              const clock2 = time[11]+time[12]
              const clock = time[11]+time[12]+time[13]+time[14]+time[15]
              const date = time[5]+time[6]+time[7]+time[8]+time[9]
              var time = date+" "+clock
              if(d.getHours()<10){
                  var contwol = `0${d.getHours()}`
              }else{
                  var contwol = d.getHours()
              }
              const klasse = ["first", "others"]
              const dag = ["tdy", "tmrw", "tda"]
              if(parseInt(date)>=parseInt(control)){
                  if(clock=="00:00"){
                      day++
                  }
                  if(clock=="06:00"){
                      document.getElementById(`${dag[day]}b`).innerHTML=`<p class=${klasse[i]}>${d.toLocaleString('en-us', {  weekday: 'long' })} ${date}<br> Weather:   ${translator(element.data.next_12_hours.summary.symbol_code)} ${element.data.next_12_hours.summary.symbol_confidence} <br><img src="symbols/shadows/png/200/${element.data.next_12_hours.summary.symbol_code}.png">`
                  }
                  if(i==0&&clock2==contwol){
                      document.getElementById("rn").innerHTML += `<p class="first">${d.toLocaleString('en-us', {  weekday: 'long' })} ${clock}<br> Weather:   ${translator(element.data.next_1_hours.summary.symbol_code)} <br> <br> Temp:   ${element.data.instant.details.air_temperature} ${myObj.properties.meta.units.air_temperature} <br> Chance of downfall: ${element.data.next_1_hours.details.probability_of_precipitation} ${myObj.properties.meta.units.probability_of_precipitation}<br> Wind speed: ${element.data.instant.details.wind_speed} ${myObj.properties.meta.units.wind_speed}<br> Humidity: ${element.data.instant.details.relative_humidity} ${myObj.properties.meta.units.relative_humidity}</p>` + `<img class="kultsymbol"src="symbols/shadows/png/200/${element.data.next_1_hours.summary.symbol_code}.png">`;
                      document.getElementById(`tdyb`).innerHTML=`<p class=${klasse[i+1]}>${new Date().toLocaleString('en-us', {  weekday: 'long' })} ${date}<br> Weather:   ${translator(element.data.next_12_hours.summary.symbol_code)} ${element.data.next_12_hours.summary.symbol_confidence} <br><img src="symbols/shadows/png/200/${element.data.next_12_hours.summary.symbol_code}.png">`
                      i++
                  }else if(parseInt(clock2)<parseInt(contwol)&&i==0){

                  }else{
                      document.getElementById(dag[day]).innerHTML += `<p class="others">${clock} Weather:   ${translator(element.data.next_1_hours.summary.symbol_code)} <img src="symbols/shadows/png/200/${element.data.next_1_hours.summary.symbol_code}.png"> Temp:   ${element.data.instant.details.air_temperature} ${myObj.properties.meta.units.air_temperature}</p>`;
                  }
              }
          });
      })
      .catch(error => {
          console.error('Error:', error);
      });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
