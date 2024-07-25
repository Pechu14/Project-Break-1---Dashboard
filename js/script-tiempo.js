//78de900e517b4107bcc110415241907 apikey//


fetch('https://api.weatherapi.com/v1/forecast.json?key=78de900e517b4107bcc110415241907&q=Almendralejo&aqi=no')
  .then(response => {
    if (!response.ok) {
      throw new Error('linea 7,error en el fetch');
    }
    return response.json();
  })
  .then(data => {
    const location = data.location;
    const current = data.current;
    const hour = data.forecast.forecastday[0].hour;
    mostrarDatosEnPantalla(location , current , hour);
  })
  .catch(error => {
    console.error('linea 18:', error);
    });

  const pantalla = document.getElementById("spanTiempo")

    function mostrarDatosEnPantalla( localizacion, tiempoHoy, tiempo24h) {
        const pantalla = document.getElementById('estacionMeteorologica');
        const localizacionSpan = document.getElementById('localizacion')
        const tempSpan = document.getElementById('temp');
        const precipitacionesSpan = document.getElementById('precipitaciones');
        const humedadSpan = document.getElementById('humedad');
        const vientoSpan = document.getElementById('viento');

        localizacionSpan.innerHTML = localizacion.name + '/' + localizacion.country
        tempSpan.innerHTML =  '<img src=' + tiempoHoy.condition.icon + '>' +
                              '<p>' + tiempoHoy.temp_c + '°C' + '/' +  tiempoHoy.condition.text + '</p>'
        precipitacionesSpan.innerHTML = tiempoHoy.precip_mm + ' %';
        humedadSpan.innerHTML = tiempoHoy.humidity + ' %';
        vientoSpan.innerHTML = tiempoHoy.wind_kph + ' km/h'


        const previsionContainer = document.getElementById('prevision-container');

        tiempo24h.forEach((prevision, i) => {
        const previsionSpan = document.createElement('div');
        previsionSpan.innerHTML = '<div class=horaPorhora>' +
                                    '<img src='+ tiempo24h[i].condition.icon + '></img>' +
                                    '<span>' + tiempo24h[i].temp_c + '°C</span>' +
                                    '<span>' + tiempo24h[i].time.slice(10); + '</span>' +
                                  '</div>'
         previsionContainer.appendChild(previsionSpan);
        })
    }
  
