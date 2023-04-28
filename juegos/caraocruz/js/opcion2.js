function opcion2(){
    let id = localStorage.getItem("id")
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
    let saldo = parseInt(usuarios[id].saldo)
    let nuevoSaldo = parseInt(document.getElementById("sumar").value)
    if (nuevoSaldo <= 0 || isNaN(nuevoSaldo)){
        alert("Ingrese un numero valido")
        return
    }
    saldo += nuevoSaldo
    let mostrar = document.getElementById("mostrar")
    mostrar.innerHTML = `Tu nuevo saldo es de : $${saldo}`
    usuarios[id].saldo = saldo
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    setTimeout(function(){
        window.location.href = "/juegos.html"
    }, 4000)
}

let botonRegistro = document.getElementById("boton")
botonRegistro.addEventListener("click", opcion2)