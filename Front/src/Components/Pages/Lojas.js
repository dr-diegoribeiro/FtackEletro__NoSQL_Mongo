import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Jumbotron';

export default function Lojas(){
    return(
      
<div>
<Jumbotron fluid>
  <Container>
    <h1>Nossas Lojas</h1>
    <p>
    Em decorrência da COVID-19 o horário de atendimento nas lojas físicas está diferenciado: de segunda a sexta-feiras, das 10h às 17h e aos sábados, das 10 às 14h.
    </p>
    <p>
      Por questões de segurança será permitido o acesso as lojas físicas apenas clientes com o uso da máscara!
    </p>
  </Container>
</Jumbotron>

    <div className="row container mt-5 d-flex ml-auto mr-auto">
        <div className="col-md-4 card text-center m-2 mx-auto">
          <img src={require('../Img/loja 1.png').default} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">São Paulo</h5>
            <div className="d-flex text-break">

              <p className="ml-auto p-2 lead">
              Av. 15 de Julho, 1479 - São Paulo
              Tel: (11) 3333-3333
              </p>  
            </div>
            <a href="#" class="btn btn-dark">como chegar</a>
          </div>
        </div>

        <div className="col-md-4 card text-center m-2 mx-auto">
          <img src={require('../Img/loja 2.png').default} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Rio de Janeiro</h5>
            <div className="d-flex text-break">

              <p className="ml-auto p-2 lead">
                Avenida Brás Cubas,
                Barra da Tijuca - Tel: (21) 3333-3333
              </p>
              
            </div>
            <a href="#" class="btn btn-dark">como chegar</a>
          </div>
        </div>

        <div className="col-md-4 card text-center m-2 mx-auto">
          <img src={require('../Img/loja 3.png').default} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Maranhão</h5>
            <div className="d-flex text-break">

              <p className="ml-auto p-2 lead">
                Rua Apóstolos,370
                - Jardim. Inamar, MA - Tel: (71) 3333-3333
              </p>
              
            </div>
            <a href="#" class="btn btn-dark">como chegar</a>
          </div>
        </div>
    </div>
</div>
    );
}