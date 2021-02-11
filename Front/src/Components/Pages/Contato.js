import './Contato.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Mensagem from '../Comentarios';

export default function Contato(){

    const [comentarios, setComentarios] = useState([]);
    const [form, setForm] = React.useState({

        nome: "",
        email: "",
        mensagem: ""
    })

    
    const [response, setResponse] = React.useState(null)

    function handleChange({target}){
        const {id, value} = target
        setForm({...form, [id]: value})
        console.log({[id]:value});
    }

    const handleSubmit = async (evento) => {
    const url = "http://localhost:4444/contatos";
    
    console.log(form)
     fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    }); 
    
}

useEffect(() => {
    async function fethData() {
        const url = "http://localhost:4444/mensagem";
        const resposta = await fetch(url);
        const resultado = await resposta.json();
        setComentarios(resultado);
    }
    fethData();
}, []);


    // function handleSubmit(event){
    //     //fetch('http://localhost:3005/mensagem', {
    //     fetch('http://localhost:4444/contatos', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         //transforma em json para mandar pra api e api mandar pro banco
    //         body: JSON.stringify(form)
    //     }).then((res) =>{
    //         setResponse(res);
    //     })
    // }


    return(
        <div className="container mt-4 contato">
        <h3 className="text-center display-4">Envie sua mensagem!!</h3>
        <form onSubmit={handleSubmit}> 
            <div className="form-group">
                <label for="text">Nome</label>
                <input type="text" className="form-control" name="nome" id="nome" value={form.nome} onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" name="email" id="email" value={form.email} onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <label>Digite sua Mensagem</label>
                <textarea class="form-control" name="mensagem" id="mensagem" value={form.mensagem} onChange={handleChange}/>
                <button className="btn btn-primary mt-3" type="submit">Enviar</button>
            </div>
        </form>

        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Mensagem</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {comentarios && comentarios.map(item => <Mensagem nome={item.nome} email={item.email} mensagem={item.mensagem} />)}
                </tbody>
            </Table>


        <div className="redesfooter backgroud:red">
            <p className="text-center display-4">siga-nos nas redes </p>
            <div className="d-flex text-center mt-5">  
            <div className="redes">
                <div className="hover">
                    <img src={require('../Img/redesocial/face.png').default} alt="" />
                    <img src={require('../Img/redesocial/instagram.png').default} alt=""/>
                    <img src={require('../Img/redesocial/twitter.png').default} alt=""/>
                    <img src={require('../Img/redesocial/linkedin.png').default} alt=""/>
                    </div> 
                    <br></br>
                    <div className="contato">
                    <a href="mailto:contato@fullstackeletro.com.br">
                    <img width="90" src={require('../Img/redesocial/email.png').default} alt=""/> </a>
                    <a href="http://localhost:3000/employee" target="_blank">
                    <img width="80" src={require('../Img/redesocial/whatsapp.png').default} alt="" /> </a>
                    </div>
                </div>
            </div>
        </div>

        </div>

        

        
    );
}