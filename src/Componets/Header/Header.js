import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo2 from '../../images/logo2.png';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';
import './Header.css';





const Header = ({cart}) => {

  const { LogOut, user } = useAuth();


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
        <Container>
          <Navbar.Brand href="#home"> <span style={{ color: "red", fontWeight: 'bold' }}>RED</span>-<span style={{ color: 'white', fontWeight: 'bold' }} >ONION</span>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to='/home' style={{ textDecoration: 'none' }}>Home</Link></Nav.Link>
              <Nav.Link ><Link to='/MainBlogPage' style={{ textDecoration: 'none' }}>Blog</Link></Nav.Link>
              <Nav.Link ><Link to='/Login' style={{ textDecoration: 'none' }}>SingUp</Link></Nav.Link>
              <Nav.Link ><Link to='/SingIn' style={{ textDecoration: 'none' }}>SingIn</Link></Nav.Link>



              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>




            </Nav>
            <Nav>
              <Nav.Link > {
                user.email && <span className="text-light me-4">welcome {user.email}</span>
              }

              </Nav.Link>

              <Nav.Link >
                {
                  user.email && <button onClick={LogOut} style={{ backgroundColor: 'red', border: 'none', color: 'white', padding: '2px', borderRadius: '3px' }}>LogOut</button>
                }

              </Nav.Link>
              
           
                <Link to='/AddToCart'>
                  
                 <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i><span>{cart.length}</span>
                </Link>
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;