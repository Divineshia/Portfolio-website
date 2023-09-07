import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {


    return(
        <div className='navbar'>
            
    <Link to = '/'>
        <span className="material-symbols-outlined">
              home</span></Link>
    <Link to = '/About'>About</Link>
    <Link to = '/Portfolio'>Portfolio</Link>
    </div> 
        
    // <Navbar expand="lg" className="bg-body-tertiary">
    // <Container>
    //     <Navbar.Brand href="/">DIVINESHIA SHARON</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/About">About</Nav.Link>
    //         <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
    //         </Nav>
    //     </Navbar.Collapse>
    //     </Container>
    // </Navbar>
    
    
    
    );
}

