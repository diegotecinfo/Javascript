let num = [5, 8, 2, 9, 3]
num.sort()
console.log(num)

//ACRESCENTANDO UM POSICAO COM VALOR 6
num[5] = 6
console.log(num)

// ACRESCENTANDO UM VALOR SEMPRE NA ULTIMA POSICAO
num.push(7)
console.log(num)

//VERIFICANDO QUANTAS POSICOES TEM NOSSO ARRAY
console.log(`O array tem ${num.length} posicoes`)

//EXIBINDO DETERMINADA POSICAO DO NOSSO ARRAY
console.log(`A primeira posicao do array é ${num[0]}`)
console.log(`A segunda posicao do array é ${num[1]}`)
console.log(`A terceira posicao do array é ${num[2]}`)
console.log(`A quarta posicao do array é ${num[3]}`)

//ORDENANDO NOSSO ARRAY POR ORDEM CRESCRENTE
console.log(num)
console.log(num.sort())

/* BUSCANDO UM VALOR DENTRO DO ARRAY E INFORMANDO A CHAVE OU POSIÇÃO ONDE O MESMO ESTÁ
QUANDO O NUMERO PROCURADO NÃO EXISTIR, O RETORNO SERÁ -1, ENTÃO VAMOS INFORMAR QUE O VALOR
NÃO FOI ENCONTRADO */
let pos = num.indexOf(6)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}



