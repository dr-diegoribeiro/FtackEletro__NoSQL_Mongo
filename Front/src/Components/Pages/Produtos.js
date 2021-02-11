import {useState, useEffect} from 'react';
import Produto from '../Produto/index'
import './style.css';

export default function Produtos(){   
const [produtos, setProdutos]= useState([]);

useEffect(() => {
  async function showProdutos() {
      //quando era no PHP: const url = "http://localhost/testes/Fullstack_ultimate/PHP/api/produtos.php";
      const url = "http://localhost:4444";
      const resposta = await fetch(url);
      const resultado = await resposta.json();
      setProdutos(resultado);
  }
  showProdutos();
},[]);

const MudarCategoria = (evento) => {
  const categoria = evento.target.id;
  let elementos = document.getElementsByClassName('divProduto');
  for (var i = 0; i < elementos.length; i++) {
    if (categoria === elementos[i].id || categoria === "todos"){
      elementos[i].style = "display:inline-block";
    }
    else{
      elementos[i].style = "display: none";
    }
  }
}
    return(

    <div className="container-fluid border">

   <div class="row">
  <div class="col-2">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active list-group-item-dark" id="list-home-list" data-toggle="list" action onClick={MudarCategoria} id ="todos">Todos</a>
      <a class="list-group-item list-group-item-action list-group-item-dark" list-group-item-dark id="list-profile-list" data-toggle="list" action onClick={MudarCategoria} id ="geladeira">Geladeiras</a>
      <a class="list-group-item list-group-item-action list-group-item-dark" id="list-messages-list" data-toggle="list" action onClick={MudarCategoria} id ="fogao">Fogões</a>
      <a class="list-group-item list-group-item-action list-group-item-dark" id="list-settings-list" data-toggle="list" action onClick={MudarCategoria} id ="microondas">Microondas</a>
      <a class="list-group-item list-group-item-action list-group-item-dark" id="list-settings-list" data-toggle="list" action onClick={MudarCategoria} id ="lavaroupas">Lava Roupas</a>
      <a class="list-group-item list-group-item-action list-group-item-dark" id="list-settings-list" data-toggle="list" action onClick={MudarCategoria} id ="lavaloucas">Lava Louças</a>
    </div>
  </div>
        

            <div className="col-md-9 col-lg-9 col-xs-12 d-flex quebrar text-center">
               
                {produtos && produtos.map(item => <Produto imagem={item.imagem} categoria={item.categoria} descricao={item.descricao} preco={item.preco} preco_final={item.preco_final}/>)}
              </div>
            </div>
        </div>
    );
}