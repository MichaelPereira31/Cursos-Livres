const Sequelize = require('sequelize')

const connection = new Sequelize('storage','root','123Mudar!',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;