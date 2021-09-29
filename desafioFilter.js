const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: false },
    { nome: 'Vidro', preco: 499, fragil: true },
    { nome: 'Copo', preco: 199, fragil: false }
]

const filtroFragil = (produto, i, produtosAtual) => produto.fragil === true
const filtroValor500 = (produto) => produto.preco < 500

console.log(produtos.map((el) => el.preco).reduce((acum, at) => { 
    console.log(`${acum} ${at}`)
    return acum + at 
}))