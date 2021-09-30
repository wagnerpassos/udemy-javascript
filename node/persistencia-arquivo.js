const fs = require('fs')

const produto = [
    {nome: 'Celular', preco: 1999.99, desconto: 0.15},
    {nome: 'Tablet', preco: 999.99, desconto: 0.20},
    {nome: 'Notebook', preco: 3999.99, desconto: 0.10}
]

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), erro =>{
    console.log(erro || "Arquivo gerado!")
})