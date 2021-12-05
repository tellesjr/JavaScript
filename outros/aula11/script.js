
function calcular() {

    var txtv = window.document.querySelector('input#txtvel')
    var vel = Number(txtv.value)
    var res = window.document.querySelector('div#res')
    res.innerHTML = `<p>Sua Velocidade atual é de <strong>${vel} Km/h</strong></p>`

    if(vel > 60) {
        res.innerHTML += '<p>Você foi <strong style="color: red;">MULTADO</strong> por excesso de velocidade!!!</p>'
    }
    
    res.innerHTML += 'Dirija sempre com o cinto de segurança'
}