const Sequelize = require('sequelize')
const connection = require('../database')

const Question = connection.define('question',{
    title:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    descriptions: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
})
Question.sync({force:false}).then(() => {
    console.log('Tabela criada')
})

module.exports = Question;