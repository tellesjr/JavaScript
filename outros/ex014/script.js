function carregar() {

    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('div#img')

    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    //var tempo = `${hora}:${min}:${seg}`

    if(hora < 10) {
        hora = "0" + hora
    } if (min < 10) {
        min = "0" + min
    } if (seg < 10) {
        seg = "0" + seg
    }


    
    msg.innerHTML = `Agora são ${hora}:${min}:${seg}`

    if(hora < 12) {
        img.style.background = 'blue'
    } else if (hora >= 12 && hora < 18) {
        img.style.background = '#a58701'
    } else {
        img.style.background = '#525252'
    }


}

function timer () {
    setInterval (carregar, 1000)
}