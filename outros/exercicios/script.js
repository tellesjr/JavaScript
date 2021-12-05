function contar () {
    let inicio = window.document.querySelector('#ini')
    let fim = window.document.querySelector('#fim')
    let passo = window.document.querySelector('#pas')
    let msg = window.document.querySelector('#msg')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        
    } else {
        msg.innerHTML = "Contando: <br><br>" 
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        let c = 0 + i

        if(p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }

        if(i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p) {
                msg.innerHTML += `${c} `
            } 
            
        }  else {
            for (let c = i; c >= f; c -= p) {
                msg.innerHTML += `${c} `
            }
        }
        
       

    }

}