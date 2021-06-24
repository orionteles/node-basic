const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
  res.send('Hello World')
})

app.get('/rota-da-requisicao', (req, res)=>{
  res.send('Você chegou aqui na rota da requisição')
})

app.get('/orion', (req, res)=>{
  res.send('Você chegou na rota Orion')
})

app.get('/media', (req, res)=>{

  const n1 = 6
  const n2 = 10
  const n3 = 4
  const n4 = 5

  const nome = "Orion"

  const media = (n1 + n2 + n3 + n4)/4

  res.send(`A média do aluno ${nome} é ${media}`)
})


app.get('/resultado-media', (req, res)=>{

  const n1 = parseFloat(req.body.n1)
  const n2 = parseFloat(req.body.n2)
  const n3 = parseFloat(req.body.n3)
  const n4 = parseFloat(req.body.n4)
  
  const nome = req.body.nome
  
  const media = (n1 + n2 + n3 + n4)/4

  if(media >= 7){
    res.send(`Aprovado com média ${media}`)  
  } else if(media > 5){
    res.send(`Recuperação com média ${media}`)  
  } else {
    res.send(`REPROVADO! com média ${media}`)  
  } 

})


app.get('/media-ponderada', (req, res)=>{

  const n1 = 8
  const n2 = 4
  
  const media = ((n1 * 0.6) + (n2 * 0.4))
  
  const nome = 'Orion'

  res.send(`A Média Ponderada do aluno ${nome} é ${media}`)
})

app.listen(3000, ()=>{
  console.log('Servidor rodando na porta 3000')  
})