import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Produtos from './Components/Pages/Produtos';
import Contato from './Components/Pages/Contato';
import Lojas from './Components/Pages/Lojas'
import Conteudo_Menu from './Components/Pages/Conteudo_Menu';


export default function Rotas (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/contato" component={Contato} />
                <Route path="/lojas" component={Lojas} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/" component={Conteudo_Menu} />
            </Switch>
        </BrowserRouter>
    );
}