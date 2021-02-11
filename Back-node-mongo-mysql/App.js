const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");



// model
require("./src/models/Contato");
const Contato = mongoose.model("contatos");
// Minha Conexão com o banco
require("./src/db/connection");

//app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/mensagem", async (req, res) => {
  const contatoResponse = await Contato.find();
  const contatoJson = await contatoResponse;

  res.json(contatoJson);
});

app.post("/contatos", async (req, res) => {
  const validate = await Contato.findOne({ email: req.body.email })
  if (validate) {
    return res.json({
      message: "Já existe uma mensagem com este email, por favor aguarde nosso retorno.",
    });
  } else {
    const novoContato = new Contato({
      nome: req.body.nome,
      email: req.body.email,
      mensagem: req.body.mensagem,
    });

    novoContato.save();
    
    res.json({message:"Mensagem enviada com sucesso", contato:novoContato});
  }

});

app.get('/', (req, res, next) => {
  const mysql = require('mysql');
  const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'fullstack_ultimate'
  });

connection.query("SELECT * FROM produtos", (error, result)=>{
  if(error){
      console.log(error)
  }
  res.json(result);
  })  
})


app.listen(4444);
