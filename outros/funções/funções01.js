function parImpar (n) {
    if(n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

let resposta = parImpar(4)
console.log(resposta)