import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import { ContacUbic,Nosotros,Dashboard, Tasks, Cart, Task} from '../index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot, faUsers} from '@fortawesome/free-solid-svg-icons'
import { ItemListCont } from '../../ItemListCont';
import { ItemDetailCont } from '../../itemDetailCont';
import { CheckOut } from '../../checkout';


const NavBar = () =>{ 
return (
    <BrowserRouter>
        <nav className='NvBar'>
                <Container className='ConTitulo'>
                    <NavLink to="/letom3d" className='Tit'>Letom 3D</NavLink>
                </Container>    
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                    <p className='Menu'>Menu</p>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink to="/letom3d/contacto-ubicacion" className='link'>
                                        Contacto y ubicacion
                                        <FontAwesomeIcon icon={faLocationDot} className='icon'/>
                                    </NavLink>
                                    <NavDropdown title="Productos" id="collasible-nav-dropdown" className='link'>
                                        <NavLink to="/letom3d/category/soporte" className='Cont link'>
                                            Soportes
                                        </NavLink>
                                        <NavDropdown.Divider />
                                        <NavLink to="/letom3d/category/variado" className='Cont link'>
                                            Variado
                                        </NavLink>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <NavLink to="/letom3d/Nosotros" className='link'>
                                        Sobre Nosotros
                                        <FontAwesomeIcon icon={faUsers} className='icon' />
                                    </NavLink>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        <Routes>
            <Route path='/letom3d/contacto-ubicacion' element={<ContacUbic />} />
            <Route path='/letom3d/category/:categoryId' element={<ItemListCont />} />
            <Route path='/letom3d/item/:itemId' element={<ItemDetailCont />} />
            <Route path='/letom3d/Nosotros' element={<Nosotros />} />
            <Route path='/letom3d' element={<Dashboard />} />
            <Route path='/letom3d/tasks' element={<Tasks />} />
            <Route path='/letom3d/task' element={<Task />} />
            <Route path='/letom3d/cart' element={<Cart />} />
            <Route path='/letom3d/Checkout' element={<CheckOut />} />
        </Routes>
    </BrowserRouter>


);
}

export { NavBar }