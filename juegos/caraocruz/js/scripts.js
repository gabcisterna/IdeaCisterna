function opcion1(){
    window.location.href = "/juegos/caraocruz/html/opcion1.html"
}

function opcion2(){
    window.location.href = "/juegos/caraocruz/html/opcion2.html"
}

function opcion3(){
    let id = localStorage.getItem("id")
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
    let nombre = usuarios[id].nombre
    let saldo = usuarios[id].saldo
    let mostrar = document.getElementById("mostrar")
    mostrar.innerHTML = `<h3>Adios ${nombre} tu saldo fue de :${saldo}<h3>`
    setTimeout(function(){
        window.location.href = "/juegos/caraocruz/html/opcion3.html"
    }, 3000)
    
}

function top10() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))
    let top10 = usuarios.map((el) => {
        return {
            saldo: el.saldo,
            nombre: el.nombre
        }
    })
    top10.sort((a, b) => b.saldo - a.saldo)
    top10Actualizado = top10.slice(0, 10)
    let mostrar = document.getElementById("mostrar")
    mostrar.innerHTML =     `<p>Top 1 ${top10Actualizado[0].nombre}: $${top10Actualizado[0].saldo}<p>
                            <p>Top 2 ${top10Actualizado[1].nombre}: $${top10Actualizado[1].saldo}<p>
                            <p>Top 3 ${top10Actualizado[2].nombre}: $${top10Actualizado[2].saldo}<p>
                            <p>Top 4 ${top10Actualizado[3].nombre}: $${top10Actualizado[3].saldo}<p>
                            <p>Top 5 ${top10Actualizado[4].nombre}: $${top10Actualizado[4].saldo}<p>
                            <p>Top 6 ${top10Actualizado[5].nombre}: $${top10Actualizado[5].saldo}<p>
                            <p>Top 7 ${top10Actualizado[6].nombre}: $${top10Actualizado[6].saldo}<p>
                            <p>Top 8 ${top10Actualizado[7].nombre}: $${top10Actualizado[7].saldo}<p>
                            <p>Top 9 ${top10Actualizado[8].nombre}: $${top10Actualizado[8].saldo}<p>
                            <p>Top 10 ${top10Actualizado[9].nombre}: $${top10Actualizado[9].saldo}<p>`
}