const datosReloj = new Date()
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
 
 const datosReloj = new Date();
  divReloj.innerHTML = '<div id = horafecha>' +
                            '<div>' + formatearHora(datosReloj) + '</div>' +
                            '<div>' + formatearFecha(datosReloj) + '</div>' +
                        '</div>'
 }
 setInterval(mostrarReloj, 1000);
 mostrarReloj();
 mostrarFrase(datosReloj.getHours());


 function mostrarFrase(horas){
    const divFrase = document.getElementById("frase")
    if (divFrase === null) return;
    if(horas >= 0 && horas < 7){
        divFrase.innerHTML = '<p>Hora de dormir</p>'
    }                 
    else if(horas >= 7 && horas < 10 ){
        divFrase.innerHTML ='<p>A pensar y programar</p>'
    }
     else if(horas >= 10 && horas < 11 ){
        divFrase.innerHTML ='<p>Toca desayunar</p>'
    }
     else if(horas >= 11 && horas < 14 ){
        divFrase.innerHTML ='<p>A seguir programando</p>'
    }
     else if(horas >= 14 && horas < 16 ){
        divFrase.innerHTML ='<p>Come y descansa</p>'
    }
     else if(horas >= 16 && horas < 18 ){
        divFrase.innerHTML ='<p>Animo que ya no queda nada</p>'
    }
    else if(horas >= 18 && horas < 19 ){
        divFrase.innerHTML ='<p>Haz un descansito</p>'
    }
    else if(horas >= 19 && horas < 21 ){
        divFrase.innerHTML ='<p>Ultimo tramo</p>'
    }
    else if(horas >= 21 && horas < 24 ){
        divFrase.innerHTML ='<p>Mañana será otro día</p>'
    }
}


 







