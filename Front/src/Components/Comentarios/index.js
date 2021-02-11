export default function Mensagem(props){
    return(
        <tr>
            <td>{props.nome}</td>
            <td>{props.email}</td>
            <td>{props.mensagem}</td>

        </tr>
    )
}