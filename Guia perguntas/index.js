const express = require('express')
const bodyParser = require('body-parser')
const connection = require('./database/database')
const app = express()
const Question = require('./database/model/Question')
const Answer = require('./database/model/Answer')

//database
connection
    .authenticate()
    .then(() => {
        console.log('bando de dados conectado!')
    })
    .catch((err) => {
        console.log(err.message)
    })

app.use(express.json())
app.use(express.json())


//estou dizendo para o Express usar o EJS como view engine
app.set('view engine','ejs')
app.use(express.static('public'))

// tradução do formulario para
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(request, response) => {
    Question.findAll({raw: true,order:[
        ['id','DESC']
    ] }).then(perguntas=>{
        response.render('index',{
            perguntas: perguntas
        })
    })
})

app.get('/questions',(request, response) => {
    response.render('questions')
})

app.post('/save',(request, response)=>{
    const title = request.body.titulo
    const description = request.body.descricao
    
    Question.create({
        title: title,
        descriptions: description
    }).then(()=>{
        response.redirect('/')
    })
})

app.get('/question/:id', (request,response) =>{
    const id = request.params.id

    Question.findOne({
        where: {id: id},
    }).then(pergunta =>{
        if(pergunta != undefined){
            Answer.findAll({
                where: {questionId: id},
                order:[
                    ['id','desc']
                ]
            }).then(respostas =>{

                response.render('question',{
                    pergunta: pergunta,
                    respostas:respostas
                })
            })
        }else{
            response.redirect('/')
        }
    })
});

app.post('/reply',(request,response) =>{
    const questionId = request.body.responder
    const question = request.body.resposta
    console.log(question)
    console.log(questionId)

    Answer.create({
        body: question,
        questionId: questionId
    }).then(() =>{
        response.redirect('/question/'+questionId)
    })
})

app.listen(3000,()=>{console.log("App rodando")})
