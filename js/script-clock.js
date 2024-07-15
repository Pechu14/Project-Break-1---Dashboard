const datos = new Date()

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
 const divReloj = document.getElementById("reloj");
 const datos = new Date();
  divReloj.innerHTML = '<div>' + formatearHora(datos) + '</div>' +
                        '<div>' + formatearFecha(datos) + '</div>';
 }
 setInterval(mostrarReloj, 1000);
 mostrarReloj();

 







