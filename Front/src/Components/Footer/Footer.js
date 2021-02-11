import './Footer.css';
export default function Footer (){
    return(
        <div className="container-fluid footer text-center bg-ligth">
            
            <h4 className="pagamento"></h4>
            
            <img class="img-fluid" alt="Responsive image" src={require(`../Img/footer.png`).default} />

    
        </div>
        
    );
}