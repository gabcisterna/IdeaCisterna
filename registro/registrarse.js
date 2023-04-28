class Usuario {
    constructor(nombre, saldo, correo, contraseña){
        this.nombre = nombre 
        this.saldo = saldo 
        this.correo = correo 
        this.contraseña = contraseña 
    }
}

function validarRegistro(){
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    let nombre = document.getElementById("nombre").value
    let saldo = parseInt(document.getElementById("saldo").value)
    let correo = document.getElementById("correo").value
    let contraseña = document.getElementById("contraseña").value
    let id = usuarios.length
    let mostrar = document.getElementById("mostrar")
    
    let validar = ValidarDatos(nombre, correo, contraseña, saldo, mostrar)
    if (validar === false){
        return
    }
    usuarios.push(new Usuario(nombre, saldo, correo, contraseña))
    mostrar.innerHTML = `<h3>Bienvenido ${nombre} tu saldo es de: $${saldo}<h3>`
    setTimeout(function(){
        window.location.href = "/juegos/index.html"
    }, 4000)
    localStorage.setItem("id", id)
    usuarios = localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

function ValidarDatos(nombre, correo, contraseña, saldo, mostrar){
    if (nombre.length == 0){
        mostrar.innerHTML = `<h4>Debe ingresar el nombre<h4>`
        return false
    }
    if (correo.length == 0){
        mostrar.innerHTML = `<h4>Debe ingresar el correo<h4>`
        return false
    } 
    if (contraseña.length == 0){
        mostrar.innerHTML = `<h4>Debe ingresar la contraseña<h4>`
        return false
    }
    if (saldo <= 0 || isNaN(saldo) || saldo.length == 0){
        mostrar.innerHTML = `<h4>Debe ingresar un saldo<h4>`
        return false
    }
}

let botonRegistro = document.getElementById("registro")
botonRegistro.addEventListener("click", validarRegistro)