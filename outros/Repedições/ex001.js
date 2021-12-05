var c = 1
var b = 1

// faz o teste e depois executa o bloco.

while (c <= 10) {
    console.log(`Passo ${c}`)
    c++
}

// executa o bloco e depois faz o teste.

do {
    console.log(`golpe ${b}`)
    b++
} while (b <= 20)