import logo from './logo.svg';
import './App.css';

function translator(text){
  if(text === "clearsky_day"||text === "clearsky_night"||text === "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text === "fair_day"||text === "fair_night"||text === "fair_polartwilight"){
      return "Fair"
  }else if(text === "partlycloudy_day"||text === "partlycloudy_night"||text === "partlycloudy_polartwilight"){
      return "Partly Cloudy"
  }else if(text === "cloudy"){
      return "Cloudy"
  }else if(text === "rainshowers_day"||text === "rainshowers_night"||text === "rainshowers_polartwilight"){
      return "Rain showers"
  }else if(text === "rainshowersandthunder_day"||text === "rainshowersandthunder_night"||text === "rainshowersandthunder_polartwilight"){
      return "Rain showers and thunder"
  }else if(text === "sleetshowers_day"||text === "sleetshowers_night"||text === "sleetshowers_polartwilight"){
      return "Sleet showers"
  }else if(text === "snowshowers_day"||text === "snowshowers_night"||text === "snowshowers_polartwilight"){
      return "Snow showers"
  }else if(text === "rain"){
      return "Rain"
  }else if(text === "heavyrain"){
      return "Heavy rain"
  }else if(text === "heavyrainandthunder"){
      return "Heavy rain and thunder"
  }else if(text === "sleet"){
      return "Sleet"
  }else if(text === "snow"){
      return "Snow"
  }else if(text === "snowandthunder"){
      return "Snow and thunder"
  }else if(text === "fog"){
      return "Fog"
  }else if(text === "clearsky_day"||text === "clearsky_night"||text === "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text === "clearsky_day"||text === "clearsky_night"||text === "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text === "clearsky_day"||text === "clearsky_night"||text === "clearsky_polartwilight"){
      return "Clear sky"
  }else if(text === "clearsky_day"||text === "clearsky_night"||text === "clearsky_polartwilight"){
      return "Clear sky"
  }
}

function showPosition(position) {
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
                  if(clock==="00:00"){
                      day++
                  }
                  if(clock==="06:00"){
                      document.getElementById(`${dag[day]}b`).innerHTML=`<p class=${klasse[i]}>${d.toLocaleString('en-us', {  weekday: 'long' })} ${date}<br> Weather:   ${translator(element.data.next_12_hours.summary.symbol_code)} ${element.data.next_12_hours.summary.symbol_confidence} <br><img src="symbols/shadows/png/200/${element.data.next_12_hours.summary.symbol_code}.png">`
                  }
                  if(i===0&&clock2===contwol){
                      document.getElementById("rn").innerHTML += `<div class="slay"><img class="kultsymbol"src="images/sol.png" id="slide"><p class="beach">${element.data.instant.details.air_temperature} ${myObj.properties.meta.units.air_temperature}</p><p class="first">${d.toLocaleString('en-us', {  weekday: 'long' })} ${clock}<br> Weather:   ${translator(element.data.next_1_hours.summary.symbol_code)}</p><p class="first"> Chance of downfall: ${element.data.next_1_hours.details.probability_of_precipitation} ${myObj.properties.meta.units.probability_of_precipitation}<br> Wind speed: ${element.data.instant.details.wind_speed} ${myObj.properties.meta.units.wind_speed}<br> Humidity: ${myObj.properties.meta.units.relative_humidity}</p><div class="chart"><div id="pie"></div><h3><span id="ngval">${element.data.instant.details.relative_humidity}</span></h3></div>`;
                      document.getElementById(`tdyb`).innerHTML=`<p class=${klasse[i+1]}>${new Date().toLocaleString('en-us', {  weekday: 'long' })} ${date}<br> Weather:   ${translator(element.data.next_12_hours.summary.symbol_code)} ${element.data.next_12_hours.summary.symbol_confidence} <br><img src="symbols/shadows/png/200/${element.data.next_12_hours.summary.symbol_code}.png"> </p></div>`;
                      //pie.style.setProperty('--ng', element.data.instant.details.relative_humidity*3.6 + 'deg')
                      //ngval.textContent = element.data.instant.details.relative_humidity;

                      i++
                  }else if(parseInt(clock2)<parseInt(contwol)&&i===0){

                  }else{
                      document.getElementById(dag[day]).innerHTML += `<p class="others">${clock} Weather:   ${translator(element.data.next_1_hours.summary.symbol_code)} <img src="symbols/shadows/png/200/${element.data.next_1_hours.summary.symbol_code}.png"> Temp:   ${element.data.instant.details.air_temperature} ${myObj.properties.meta.units.air_temperature}</p>`;
                  }
              }
          });
      })
      .catch(error => {
          console.error('Error:', error);
      });
}

function App() {
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
