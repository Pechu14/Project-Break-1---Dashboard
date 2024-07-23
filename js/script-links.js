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
















    
