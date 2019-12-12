var idade = 67
console.log(`Você tem ${idade} anos!`)
    if (idade  < 16){
        console.log('Não vota')
    } else if (idade < 18 || idade >= 67){ //se estiver entre 16 e 18 ou maior igual a 67, voto opcional.
        console.log('Voto opcional')
    } else{
       console.log('Voto OBRIGATÓRIO!')
    }