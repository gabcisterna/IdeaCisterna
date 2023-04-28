function validarSesion(){

    let usuarios = JSON.parse(localStorage.getItem("usuarios"))

    let correo = document.getElementById("correo").value
    let contraseña = document.getElementById("contraseña").value
    let mostrar = document.getElementById("mostrar")
    
    for (let i = 0;i < usuarios.length; i++){
        if (usuarios[i].correo.toUpperCase() === correo.toUpperCase() && usuarios[i].contraseña.toUpperCase() === contraseña.toUpperCase()){
            mostrar.innerHTML = `<h3>Iniciaste sesión con exito<h3><h4>Bienvenido ${usuarios[i].nombre} tu saldo es de: $${usuarios[i].saldo}<h4>`
            setTimeout(function(){
                window.location.href = "/juegos/index.html"
            }, 3000)
            localStorage.setItem("id", i)
            return
        }
    }
    mostrar.innerHTML = `<h3>Nombre de usuario invalido<h3>`
}


function registrarse(){
    window.location.href = "/registro/registrarse.html"
}

function buscarUsuario(usuarios, correo, contraseña){
    let cont = 0
    usuarios.forEach(element => {
        if (element.contraseña == contraseña && element.correo.toUpperCase() == correo.toUpperCase()){
            return cont
        }
        cont++
    })
    return NaN
}

let botonInicio = document.getElementById("iniciarsesion")
botonInicio.addEventListener("click", validarSesion)

let botonRegistro = document.getElementById("registrarse")
botonRegistro.addEventListener("click", registrarse)

// Arreglar el tema de encontrar al usuario y guardar el ID


