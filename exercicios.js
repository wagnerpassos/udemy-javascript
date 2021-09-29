function cumprimentar(nome) {
    return `Olá, ${nome}!`
}

function converterIdadeEmAnosParaDias(idade) {
    const duracaoAno = 365
    return idade * duracaoAno
}

function calcularSalario(horas, valorHora) {
    let valorCalculado = horas * valorHora 
    return `Salário igual a R$ ${valorCalculado}`
}

function nomeDoMes(numeroMes) {
    meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return meses[numeroMes - 1]
}

function maiorOuIgual(primeiroN, segundoN) {
    if(typeof primeiroN != "number" || typeof segundoN != "number"){
        return false
    }        
    if(primeiroN >= segundoN){
        return true
    }
}

function inverso(valor){
    tipo = typeof valor
    if(tipo == "number"){
        return valor * -1
    }else if(tipo == "boolean"){
        return !valor
    }
    return `"booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}

function multiplicar(n1, n2){
    let resultado = 0
    for(let i = 0; i < n2; i++){
        resultado += n1
    }
    return resultado
}

function repetir(item, quantidade) {
    let resultado = []
    for (let i = 0; i < quantidade; i++){
        resultado.push(item)
    }
    return resultado
}


function simboloMais(quantidade){
    let resultado = []
    for(let i = 0; i < quantidade; i++){
        resultado += '+'
    }
    return resultado
}

function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento= elementos.shift()
    const ultimoElemento = elementos.pop()

    return [primeiroElemento, ultimoElemento]
}
    
function removerPropriedade(objeto, elemento){
    const objetoCopia = {...objeto}
    delete objetoCopia[elemento]
    
    return objetoCopia
}

function filtrarNumeros(lista){
    const resultado = []
    for(let i = 0; i < lista.length; i++){
        if(typeof lista[i] == "number"){
            resultado.push(lista[i])
        }
    }
    return resultado
}

function somarNumeros(lista){
    return lista.reduce((total, x) => total + x, 0)
}

function despesasTotais(elementos){
    return elementos
                .map(el => el.preco)
                .reduce((acumulador, valor) => acumulador + valor, 0)   
}

function calcularMedia(numeros){
    return numeros.reduce((acumulador, n) => acumulador + n) / numeros.length
}

console.log( calcularMedia([0, 10]))
console.log( calcularMedia([1, 2, 3, 4, 5]) )
