function gerarTabuada() {
    let numeroDigitado = window.document.querySelector('#numeroDigitado')
    let mostrarTabuada = window.document.querySelector('#mostrarTabuada')

    if(numeroDigitado.value.length == 0) {
        alert('[ERRO] Por favor digite um número: ')
    } else {
        let numero = Number(numeroDigitado.value)
        let c = 1
        mostrarTabuada.innerHTML = ""
        while (c <= 10) {
            let itemTabuada = window.document.createElement('option')
            itemTabuada.text = `${numero} x ${c} = ${numero*c}`
            mostrarTabuada.appendChild(itemTabuada)

            c++
        }
    }
}