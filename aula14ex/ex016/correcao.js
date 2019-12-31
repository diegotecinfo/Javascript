function calcular() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('Passo inválido, considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }    
        }
        res.innerHTML += `\u{1F3C1}`
    }
}