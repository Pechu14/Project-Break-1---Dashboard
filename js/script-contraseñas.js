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













