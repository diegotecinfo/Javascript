function calcular() {
    var ini = Number(document.getElementById('txtini').value)
    var fim = Number(document.getElementById('txtfim').value)
    var passo = Number(document.getElementById('txtpasso').value)
    var laco = ini
    var result = document.querySelector('div#res')

    if (ini == null || fim == 0) {
        alert('Prencha o campo Inicio e Fim')
    } else if (passo == 0 || passo == null) {
        alert('Passo inválido, será considerado passo 1!')
        passo = 1
    } else {
        //console.log(ini)
        //console.log(passo)
        //console.log(laco)

        while (ini < fim) {
            laco += passo
            console.log(laco)
        }
    }
}



// VALIDAÇÃO 1 - É OBRIGATORIO O PREENCHIMENTO DO CAMPO INICIO

// VALIDAÇÃO 2 - NÃO É PERMITIR QUE O CAMPO PASSO SEJA PREENCHIDO COM VALOR ZERO, QUANDO ISSO ACONTECER ALTERAR PARA PASSO = 1