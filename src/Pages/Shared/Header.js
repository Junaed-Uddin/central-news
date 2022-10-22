import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaPlus, FaPowerOff, FaUserAlt } from 'react-icons/fa';
import LeftSideNav from './LeftSideNav';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import userImg from '../../assets/userImg.jpg';

const Header = () => {
    const { user, userLogout } = useContext(AuthContext);

    const handleLogOut = () => {
        userLogout()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="light py-3 shadow fw-bold mb-4">
            <Container>
                <Navbar.Brand className='fs-3'><Link to='/' style={{ textDecoration: 'none' }}>Central <span className='text-black'>Media</span></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features" className='text-start'>Features</Nav.Link>
                        <Nav.Link href="#pricing" className='text-start mb-2 mb-lg-0'>Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user?.uid?
                                <>
                                    <DropdownButton variant="outline-primary mt-2 me-2" id="dropdown-basic-button" title={user?.displayName ? user.displayName : 'Anonymous'}>
                                        <Dropdown.Item onClick={handleLogOut}>
                                            <FaPowerOff /><span className='ms-1'>Log out</span>
                                        </Dropdown.Item>
                                    </DropdownButton>
                                    <NavLink to='/profile'>
                                        <img className='rounded-circle border border-2 img-fluid' style={{ height: '4   8px', width: '50px' }} src={user?.photoURL ? user.photoURL : userImg} referrerPolicy='no-referrer' alt="" />
                                    </NavLink>
                                </> :
                                <>
                                    <Link to='/register'>
                                        <Button variant="primary me-lg-2 py-2"><FaPlus /> Registration</Button>
                                    </Link>
                                    <Link to='/login'>
                                        <Button variant="outline-dark mt-2 mt-lg-0 py-2 px-3"><FaUserAlt /><span className='ms-1 '>Login</span></Button>
                                    </Link>
                                </>
                        }

                    </Nav>
                    <div className='d-md-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;