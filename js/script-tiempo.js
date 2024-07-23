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
    console.error('linea 15:', error);
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
                              '<p>' + tiempoHoy.temp_c + '°' + '/' +  tiempoHoy.condition.text + '</p>'
        precipitacionesSpan.innerHTML = tiempoHoy.precip_mm + ' %';
        humedadSpan.innerHTML = tiempoHoy.humidity + ' %';
        vientoSpan.innerHTML = tiempoHoy.wind_kph + ' km/h'


        const previsionContainer = document.getElementById('prevision-container');

        tiempo24h.forEach((prevision, i) => {
        const previsionSpan = document.createElement('div');
        previsionSpan.innerHTML = '<div class=horaPorhora>' +
                                    '<img src='+ tiempo24h[i].condition.icon + '></img>' +
                                    '<span>' + tiempo24h[i].temp_c + '°</span>' +
                                    '<span>' + tiempo24h[i].time.slice(10); + '</span>' +
                                  '</div>'
         previsionContainer.appendChild(previsionSpan);
        })
    }
  
    function irADiv() {
      document.querySelector('estacionMeteorologica').scrollIntoView({ behavior: 'smooth' });
  }


  const imagenes = [
    'url("assets/img/0.jpg")',
    'url("assets/img/1.jpg")',
    'url("assets/img/2.jpg")',
    'url("assets/img/3.jpg")',
    'url("assets/img/4.jpg")',
    'url("assets/img/5.jpg")',
    'url("assets/img/6.jpg")',
    'url("assets/img/7.jpg")',
    'url("assets/img/8.jpg")',
    'url("assets/img/9.jpg")',
    'url("assets/img/10.jpg")',
    'url("assets/img/11.jpg")',
    'url("assets/img/12.jpg")',
    'url("assets/img/13.jpg")',
    'url("assets/img/14.jpg")',
    'url("assets/img/15.jpg")',
    'url("assets/img/16.jpg")',
    'url("assets/img/17.jpg")',
];

  function cambiaFondo() {
    const randomIn = Math.floor(Math.random() * imagenes.length);
    console.log(randomIn);
    document.body.style.backgroundImage = imagenes[randomIn];
}

setInterval(cambiaFondo, 10000);


cambiaFondo()

