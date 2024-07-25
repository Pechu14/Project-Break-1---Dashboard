
///************************estacion meteorologica************/
//78de900e517b4107bcc110415241907 apikey//


////*******para el cambio de fondo****************/

const fotosGeneral = [
    'url("../assets/img/0.jpg")',
    'url("../assets/img/1.jpg")',
    'url("../assets/img/2.jpg")',
    'url("../assets/img/3.jpg")',
    'url("../assets/img/4.jpg")',
    'url("../assets/img/5.jpg")',
    'url("../assets/img/6.jpg")',
    'url("../assets/img/7.jpg")',
    'url("../assets/img/8.jpg")',
    'url("../assets/img/9.jpg")',
    'url("../assets/img/10.jpg")',
    'url("../assets/img/11.jpg")',
    'url("../assets/img/12.jpg")',
    'url("../assets/img/13.jpg")',
    'url("../assets/img/14.jpg")',
    'url("../assets/img/15.jpg")',
    'url("../assets/img/16.jpg")',
    'url("../assets/img/17.jpg")',
];

function cambiaFondo() {
    const randomIn = Math.floor(Math.random() * fotosGeneral.length);
    document.body.style.backgroundImage = fotosGeneral[randomIn];
}
setInterval(cambiaFondo, 10000);
cambiaFondo()
