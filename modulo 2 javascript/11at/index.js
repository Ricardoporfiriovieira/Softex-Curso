const express = require("express");
const app = express();
const conection =  require("./database/database");

conection
    .authenticate()
    .then(()=>{
        console.log("Banco de dados conectado com sucesso!")
    })
    .catch((msgerro)=>{
        console.log(msgerro);
    })

    