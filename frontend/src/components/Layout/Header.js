import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Dropdown, Image, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo_react.png';
import './Header.css';

const NavigationBar = () => {
    const [usuario, setUsuario] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const usuarioLogado = localStorage.getItem('usuario');
        if (usuarioLogado) {
            setUsuario(JSON.parse(usuarioLogado));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('usuario');
        localStorage.removeItem('token');
        setUsuario(null);
        navigate('/login');
    };

    const saudacaoUsuario = () => {
        if (usuario) {
            return usuario.role === 'administrador'
                ? `Seja bem vindo Administrador ${usuario.nome}`
                : `Seja bem vindo Usuário ${usuario.nome}`;
        }
        return '';
    };

    return (
        <Navbar expand="lg" className="mb-4 navbar">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                        style={{ marginRight: '10px' }}
                    />
                    Ficticios
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/sobre">Sobre</Nav.Link>
                        <Nav.Link href="/contato">Contato</Nav.Link>
                        <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
                        {usuario ? (
                            <Dropdown align="end">
                                <Dropdown.Toggle id="dropdown-basic" className="d-flex align-items-center">
                                    <Image src={`http://localhost:3001/uploads/${usuario.foto_perfil}`} roundedCircle width="30" height="30" className="mr-2" /> 
                                    <span className="username">{saudacaoUsuario()}</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.ItemText><span className="username">{usuario.nome}</span></Dropdown.ItemText>
                                    <Dropdown.ItemText>Email: {usuario.email}</Dropdown.ItemText>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <Nav.Link href="/login" className="ml-3">Login</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
