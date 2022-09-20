const expres = require("express");
const app = expres();

const bodyparser = require("body-parser");

var DB = [
    {
        id: 1,
        nome: "league of legends",
        ano: 2010,
        preco: 0 
    },
    {
        id: 2,
        nome: "AER",
        ano: 2020,
        preco: 27
    },
    {
        id: 3,
        nome: "DOKI DOKI",
        ano: 2019,
        preco: 40
    }
]


app.get("/list_games", (req, res)=>{
    res.json(DB);
})




app.listen(3000, (erro)=>{
    if(erro){
        console.log(erro);
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})