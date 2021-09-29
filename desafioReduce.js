const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: true},
    { nome: 'Ana', nota: 8.6, bolsista: true}
]


const todosSaoBolsas = (acum, el) => acum && el
const algumBolsa = (acum, el) => acum || el

console.log(alunos.map((a) => a.bolsista).reduce(todosSaoBolsas))

console.log(alunos.map((a) => a.bolsista).reduce(algumBolsa))