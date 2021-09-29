const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 4.99}',
    '{"nome": "Lapis", "preco": 3.99}',
    '{"nome": "Caneta", "preco": 1.25}'
]

const paraObj = json => JSON.parse(json)
const retomaValor = carrinho => carrinho.preco

console.log(carrinho.map(paraObj).map(retomaValor))