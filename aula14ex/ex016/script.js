function calcular () {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var result = document.querySelector('div#res')

        if (ini.value.length == 0 || fim.value.length == 0){
            alert('Prencha o campo Inicio e Fim')
        } else if (passo.value == 0 || passo.value.length == 0) {
            alert('Passo inválido, será considerado passo 1!')
            passo = 1
        }

        for (teste = ini+=passo; ini <= fim; ini+=passo) {
            console.log(teste.value)
        }
}









// VALIDAÇÃO 1 - É OBRIGATORIO O PREENCHIMENTO DO CAMPO INICIO

// VALIDAÇÃO 2 - NÃO É PERMITIR QUE O CAMPO PASSO SEJA PREENCHIDO COM VALOR ZERO, QUANDO ISSO ACONTECER ALTERAR PARA PASSO = 1