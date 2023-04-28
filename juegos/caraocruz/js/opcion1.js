function opcion1() {
    let mostrar = document.getElementById("mostrar")
    mostrar.innerHTML = ``
    let id = localStorage.getItem("id")
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
    let saldo = parseInt(usuarios[id].saldo)
    let apuesta = validarApuesta(saldo)
    let eleccion = validarEleccion()
    if (apuesta === true) {
        return
    }
    if (eleccion === true) {
        return
    }
    let aleatorio = convertirPalabras(Math.round(Math.random()))
    let resultado = verificarResultado(eleccion, aleatorio)
    saldo = resultadoSaldo(apuesta, resultado, saldo)
    mostrarResultado(resultado, eleccion, aleatorio, apuesta, saldo)

    usuarios[id].saldo = saldo
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    if (saldo === 0) {
        window.location.href = "/juegos/caraocruz/sinsaldo.html"
    }
}


// Verifica que la apuesta no sea menor que 0 y que no apueste mas de lo que pueda y que no esriba alguna palabra
function validarApuesta(saldo) {
    let mostrar = document.getElementById("mostrar")
    let apuesta = parseInt(document.getElementById("apuesta").value)
    if (apuesta <= 0 || apuesta > saldo || isNaN(apuesta)) {
        mostrar.innerHTML = `<h3>Apuesta invalida, Ingrese nuevamente la apuesta<h3>`
        return true
    } else {
        return apuesta
    }
}


function validarEleccion() {
    let mostrar = document.getElementById("mostrar")
    
    let eleccion = document.querySelector('input[name="opcion"]:checked')
    if (eleccion) {
        return eleccion.value
    } else {
        mostrar.innerHTML = `<h3>Apuesta invalida, Seleccione una opcion</h3>`
        return true
    }
}

// Da true si son iguales y da false si son distintos
function verificarResultado(eleccion, aleatorio) {
    if (aleatorio == eleccion) {
        return true
    } else {
        return false
    }
}


function mostrarResultado(resultado, eleccion, aleatorio, apuesta, saldo) {
    let apuestaRealizada = document.getElementById("apuestaRealizada")
    resultado ? apuestaRealizada.innerHTML =
        `<h3>Salio ${aleatorio} y elegiste ${eleccion} Felicidades Ganaste!!\nTu apuesta fue de: $${apuesta} tu nuevo saldo es: ${saldo}<h3>` :
        apuestaRealizada.innerHTML = `<h3>Salio ${aleatorio} y elegiste ${eleccion} Mala suerte perdiste :(\nTu apuesta fue de: $${apuesta} tu nuevo saldo es: ${saldo}<h3>`

}

// Convierte el 1 en cara y el 2 en cruz
function convertirPalabras(numero) {
    if (numero == 1) {
        return "CARA"
    } else {
        return "CRUZ"
    }
}

// Suma o resta el saldo dependiendo del resultado
function resultadoSaldo(apuesta, resultado, saldo) {
    if (resultado) {
        saldo += apuesta
    } else {
        saldo -= apuesta
    }
    return saldo
}

let botonRegistro = document.getElementById("boton")
botonRegistro.addEventListener("click", opcion1)