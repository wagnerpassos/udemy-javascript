const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

Array.prototype.map2 = function(callback){
    const provisorio = []
    for(let i = 0; i < this.length; i++){
        provisorio.push(callback(this[i], i, this))
    }
    return provisorio
}

const soma5 = (valor) => valor + 5
const mult2 = (valor) => valor * 2

let resultado = numeros.map2(mult2).map2(soma5).filter((a) => a <= 10)

console.log(resultado)