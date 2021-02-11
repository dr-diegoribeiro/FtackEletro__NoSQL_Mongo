import './Produto.css';
export default function Produto(props){
    return(
        <div id={props.categoria} className={" divProduto container col-lg-3 col-md-4 col-sm-6 col-xs-12 mx-auto box"}>
           <img className="img-produto ml-auto mr-auto" id="img-produto" src={require(`../Img/produtos2/${props.imagem}`).default} alt="Imagem produto"/>
            <div className="text-center">

                <p className="lead">
                    {props.descricao}
                </p>
                <div className="d-flex">
                    <p className="preco-prod ml-4 ">
                        R$ {props.preco}
                    </p>
                    <p className="precofinal-prod ml-4">
                        R$ {props.preco_final}
                    </p>
                </div>
                <button type="button" className="btn btn-dark">Comprar</button>
                
            </div>
        </div>
    );
}
