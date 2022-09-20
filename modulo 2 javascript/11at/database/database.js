const sequelize = require("sequelize")
const conection = new sequelize("nomedobanco", "root", "senha", {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conection;