function calcular() {
    var ini = Number(document.getElementById('txtini').value)
    var fim = Number(document.getElementById('txtfim').value)
    var passo = Number(document.getElementById('txtpasso').value)
    var res = document.querySelector('div#res')

    if (ini == '' || fim == 0) {
        res.innerHTML = 'Impossível contar!'
        console.log(`${ini} ${fim} ${passo}`)
    } else {
        if (passo <= 0) {
            window.alert('Passo inválido, considerando Passo 1')
            passo = 1
            console.log(`${ini} ${fim} ${passo}`)
        }
        res.innerHTML = 'Contando: '
        //Contagem crescente
        if (ini < fim) {
            while (ini <= fim) {
                res.innerHTML += ` ${ini} \u{1F449}`
                ini += passo
            }
        } else {
            //Contagem regressiva
            for (laco = ini; laco >= fim; laco -= passo) {
                res.innerHTML += ` ${laco} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3c1}`
    }
}
