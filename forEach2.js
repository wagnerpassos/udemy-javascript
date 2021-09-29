const aprovados = ['maria', 'pedro', 'joao']

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}  

aprovados.forEach(a => console.log(a)) 