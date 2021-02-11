import './Menu.css';
import {Nav, Navbar, Form, Button, FormControl} from 'react-bootstrap';


function Menu(){
    return(

        
         <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home"><Navbar.Brand href="#home"> <img src={require('../Img/logo_menu.png').default} width="130" alt="logo_fullstackeletro" /></Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/produtos">PRODUTOS</Nav.Link>
          <Nav.Link href="/lojas">LOJAS</Nav.Link>
          <Nav.Link href="/contato">CONTATO</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Procurar" className="mr-sm-2" />
            <Button variant="light ">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>


    );
}

export default Menu;