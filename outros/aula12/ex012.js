var agora = new Date()

var hora = agora.getHours()

var min = agora.getMinutes()

var seg = agora.getSeconds()

var temp = hora+':'+min+":"+seg;

if (hora < 10) hora = "0"+hora;
if (min < 10) min = "0"+min;
if (seg < 10) seg = "0"+seg;

console.log(`Agora são exatamente ${hora}:${min}:${seg}`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora >=12 && hora < 18) {
    console.log('boa tarde!')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite!')
} else {
    console.log('Boa Madrugada!!!')
}