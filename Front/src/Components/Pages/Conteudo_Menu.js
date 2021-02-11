import Carousel from 'react-bootstrap/Carousel'

export default function Menu_index(){
    return(
    <div className="container my-5" >
        <div className="text-center">
            <h1 className="display-4">Bem vindos ao Full Stack Eletro!</h1>
            <p className="descontoProgramador">Aqui em nossa loja, programadores possuem descontos nos produtos!</p>
        </div>
        <div className="carrossel">
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={require("../Img/banner1.png").default} width="50"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={require("../Img/banner2.png").default} width="50"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../Img/banner3.jpg").default} width="50"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    </div>
    );
}

