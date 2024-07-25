import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/img/logo_react.png'; // Adicione o caminho correto para a sua logo
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-4">
            <Container>
                <Row className="align-items-center">
                    <Col md={4}>
                        <Nav className="flex-column">
                            <Nav.Link href="/sobre" className="text-light">Sobre</Nav.Link>
                            <Nav.Link href="/contato" className="text-light">Contato</Nav.Link>
                            <Nav.Link href="/cadastrar" className="text-light">Cadastrar</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4} className="text-center">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top mb-2"
                            alt="Logo"
                        />
                        <p>&copy; 2024 Todos os direitos reservados.</p>
                        <div className="social-icons">
                            <a href="https://facebook.com" className="text-light mx-2"><FaFacebookF /></a>
                            <a href="https://twitter.com" className="text-light mx-2"><FaTwitter /></a>
                            <a href="https://instagram.com" className="text-light mx-2"><FaInstagram /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
