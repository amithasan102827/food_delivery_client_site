import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo2 from '../../images/logo2.png';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';
import './Header.css';





const Header = ({ cart }) => {

  const { LogOut, user } = useAuth();


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
        <Container>
          <Navbar.Brand href="#home"> <span style={{ color: "red", fontWeight: 'bold' }}>RED</span>-<span style={{ color: 'white', fontWeight: 'bold' }} >ONION</span>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link  to='/home' className='text-white text-decoration-none'>Home</Link></Nav.Link>
              <Nav.Link ><Link to='/MainBlogPage' className='text-white text-decoration-none'>Blog</Link></Nav.Link>
              <Nav.Link ><Link to='/Login' className='text-white text-decoration-none' >SingUp</Link></Nav.Link>
              <Nav.Link ><Link to='/SingIn' className='text-white text-decoration-none' >SingIn</Link></Nav.Link>
              <Nav.Link ><Link to='/reviews' className='text-white text-decoration-none'>Reviews</Link></Nav.Link>

              {/* <Nav.Link ><Link to='/makeAdmin' style={{ textDecoration: 'none' }}>MakeAdmin</Link></Nav.Link> */}

              {
                user.email &&
                <Nav.Link ><Link to='/DashBoard'  className='text-white text-decoration-none'>DashBoard</Link></Nav.Link>
              }



              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}




            </Nav>
            <Nav>
              <Nav.Link > {
                user.email && <span style={{ fontSize: "12px" }} className="text-light me-2">welcome {user.email}</span>
              }

              </Nav.Link>

              <Nav.Link >
                {
                  user.email && <button className="btn btn-primary btn-sm" onClick={LogOut} style={{ backgroundColor: 'red', border: 'none', color: 'white', padding: '3px 8px', borderRadius: '3px' }}>LogOut</button>
                }

              </Nav.Link>


              <Link className='text-decoration-none' to='/AddToCart'>
                <i class="fa fa-shopping-cart fa-lg ms-3 text-light" aria-hidden="true" style={{ marginTop: '12px' }}></i><span className='text-light fs-6 ms-1'>{cart.length}</span>
              </Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;