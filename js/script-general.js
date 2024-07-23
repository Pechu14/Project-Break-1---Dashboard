const imagenes = [
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
    'url("assets/img/18.jpg")',
    'url("assets/img/19.jpg")',
    'url("assets/img/20.jpg")',
];

function changeBackground() {
    const randomIndex = Math.floor(Math.random() * imagenes.length -1);
    document.body.style.backgroundImage = imagenes[randomIndex];
}

setInterval(changeBackground, 15000);


changeBackground();
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundRepeat = 'no-repeat';