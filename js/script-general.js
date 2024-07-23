

///************************estacion meteorologica*********** */
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




  /////************Generador de contraseñas************** */

  const mayusculas= [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
  const minusculas= [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
  const numeros=[ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
  const simbolos=[ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+' ]
  const resto =[...mayusculas, ...minusculas, ...numeros, ...simbolos]
  
  
  
  const inputNumero = document.getElementById('inputNumber');
  const botonContra = document.getElementById("botonContra");
  
  // Función para crear los numeros obligatorios
  function crearObligatorios() {
      let obligatorios ="";
          let randomMayus = Math.floor(Math.random() * mayusculas.length);
          let randomNum = Math.floor(Math.random() * numeros.length); 
          let randomSimb = Math.floor(Math.random() * simbolos.length); 
          let randomMin = Math.floor(Math.random() * minusculas.length);
          obligatorios += mayusculas[randomMayus] + numeros[randomNum] + simbolos[randomSimb] + minusculas[randomMin]
      return obligatorios;
  }
  
  //creamos el resto de numeros con el array resto
  function crearResto(length) {
      let contraseña ="";
  
      for (let i = 0; i < length; i++) {
          let random = Math.floor(Math.random() * resto.length);
          contraseña += resto[random];
      }
  
      return contraseña;
  }
  
  botonContra.addEventListener('click', () => {
      const longitudContraseña = inputNumero.value;
      if(longitudContraseña < 12 || longitudContraseña > 50){
          const contraseñaCreada = document.getElementById("contraseñaCreada")
          contraseñaCreada.innerHTML= '<p>La contraseña debe tener un mínimo de 12 caracteres y un máximo de 50 </p>'
      }else{
      crearContraseña(longitudContraseña)
      }
  });
  
  function crearContraseña (longitudContraseña) {
      //obtenemos los obligatorios
      let obligatorios = crearObligatorios();
       //obtenemos el resto de numeros
      let contraseña =  crearResto(longitudContraseña - 4);
  
      //sumamos el resto con los obligatorios
      let contraseñaTotal = contraseña + obligatorios
      const contraseñaCreada = document.getElementById("contraseñaCreada")
  contraseñaCreada.innerHTML= '<p>Aquí tienes tu contraseña: </p>' +
                              '<p>' + contraseñaTotal + '</p>'
  }
  
  function irADiv() {
      document.querySelector('contraseñas').scrollIntoView({ behavior: 'smooth' });
  }

  
  ///////////********Biblioteca de enlaces************************ */

  const urls = JSON.parse(localStorage.getItem('listaDeEnlaces')) || []
mostrarEnpantalla(urls)

const listadoEnlaces = document.getElementById("listadoEnlaces")

anadirEnlace.addEventListener('click', () => {
    const anadirEnlace = document.getElementById("anadirEnlace")
    const inputNombre = document.getElementById("inputNombre").value;
    const inputEnlace = document.getElementById("inputEnlace").value;
    const url = { key: inputNombre, enlace: inputEnlace}
    urls.push(url)
    localStorage.setItem('listaDeEnlaces', JSON.stringify(urls));
    const urlsRecuperado = localStorage.getItem('listaDeEnlaces');
    const urlsParseado = JSON.parse(urlsRecuperado);
    mostrarEnpantalla(urlsParseado);
})

function mostrarEnpantalla(urlsParseado){
    let listadoEnlaces = document.getElementById('listadoEnlaces');
    listadoEnlaces.innerHTML = '';

    for (let i = 0; i < urlsParseado.length; i++) {
        // para crear elemento li con el enlace "a" y el boton de borrar
        let li = document.createElement('li');
         //elemento a para el enlace
         let a = document.createElement('a');
         //para meter el nombre
         a.textContent = urlsParseado[i].key;
         //para guardar el enlace
         a.href = urlsParseado[i].enlace;
         a.target = '_blank';
        
        //para crear un boton de eliminar
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        //añadir el evento al boton eliminar
        botonEliminar.addEventListener('click', function() {
            // Eliminar el elemento del DOM,de la lista de la pagina
            li.remove();
            const listaParaBorrar = JSON.parse(localStorage.getItem('listaDeEnlaces'))
             listaParaBorrar.splice(i, 1);
             urls.splice(i, 1);
            localStorage.setItem('listaDeEnlaces', JSON.stringify(listaParaBorrar));
            mostrarEnpantalla(listaParaBorrar);
        });
        // para meter el enlace y el boton en elemento li
        li.appendChild(a);
        li.appendChild(botonEliminar);
        // para meter el li como hijo en listadoEnlaces
        listadoEnlaces.appendChild(li);
    }
}
function irADiv() {
    document.querySelector('links').scrollIntoView({ behavior: 'smooth' });
}


////////////******para el reloj sin frase********** */
const datos = new Date()
const divReloj = document.getElementById("reloj");

 function formatearFecha(fecha) {
    let dia = fecha.getDate()
    let mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear() 
    if(dia < 10){
        dia = "0" + dia;
    }
    if(mes < 10){
        mes = "0" + mes;
    }
    const fechaFormateada = dia + "/" + mes + "/" + año
    return fechaFormateada
 }


 function formatearHora(hora) {
    let horas = hora.getHours()
    let minutos = hora.getMinutes()
    let segundos = hora.getSeconds()
    if(horas < 10) {
        horas = "0" + horas
    }
    if(minutos < 10) {
        minutos = "0" + minutos
    }
    if(segundos < 10) {
        segundos = "0" + segundos
    }
    const horaFormateada = horas + ":" + minutos + ":" + segundos
    return horaFormateada
 }

 function mostrarReloj(){
 
 const datos = new Date();
  divReloj.innerHTML = '<div id = horafecha>' +
                            '<div>' + formatearHora(datos) + '</div>' +
                            '<div>' + formatearFecha(datos) + '</div>' +
                        '</div>'
 }
 setInterval(mostrarReloj, 1000);
 mostrarReloj();


////*******para el cambio de fondo*************** */


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
