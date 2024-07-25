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
         //para que lo abra en una nueva ventana
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














    
