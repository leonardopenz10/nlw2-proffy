//SERVIDOR
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')
const nunjucks = require('nunjucks')

//Configurar o Nunjucks
nunjucks;nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.urlencoded({ extended: true}))
//Configurar arquivos estáticos (CSS, Scripts, Imagens)
.use(express.static("public"))
//Rotas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
.listen(5500)