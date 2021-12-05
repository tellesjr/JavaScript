let numero = [5, 4, 3, 2, 1, 0]
let p = 0
/* while (p <= numero.length) {
    console.log(`Posição ${p}`)

    p++
} */

/* do {
    console.log(p)
    p++
} while (p <= numero.length)
*/

/*
for(let c = 0; c < numero.length; c++) {
    console.log(`Seu vetor inteiro é ${[numero]}. Seu vetor tem o tamanho de ${numero.length} elementos. \ A posição ${c} tem o valor ${numero[c]}`)
    
}
*/

/*for (let pos in numero) {
    console.log(`Na posição ${pos} tem o valor ${numero[pos]}`)
}*/

let pos = numero.indexOf(4)
if (pos == -1) {
    console.log(`Esse valor não foi encontrado!`) 

    
} else {
    console.log(`Esse valor está na posição ${pos}`)
}


