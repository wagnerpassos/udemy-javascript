const fs = require('fs')
const caminho = __dirname + '/arquivo.json' 

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assíncrona
fs.readFile(caminho, 'utf-8', (erro, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//leitura de diretório
fs.readdir(__dirname, (erro, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})