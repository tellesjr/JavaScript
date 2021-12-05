function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoDigitado = window.document.querySelector('#anoDigitado')
    var res = window.document.querySelector('#res')

    if(anoDigitado.value.length == 0 || Number(anoDigitado.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = window.document.getElementsByName('sex')
        var idade = ano - Number(anoDigitado.value)
        var gen = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked) {
            gen = "um Homem"

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'favicon.ico')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'dan-droids-pq.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'dan-droids.png')
            } else {
                // idoso
                img.setAttribute('src', 'bugdroid.png')
            }

        } else if (sex[1].checked) {
            gen = "uma Mulher"

            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50){
                // Adulto
            } else {
                // idoso
            }

        }

        res.style.color = 'green'
        res.innerHTML = `Você é ${gen} de ${idade} anos.`
        res.appendChild(img)
    }   
}