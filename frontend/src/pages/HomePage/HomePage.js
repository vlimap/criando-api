import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaBook, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';
import './HomePage.css';
const HomePage = () => {

    return (
        
        <Container className="home-container">
            <Row className='justify-content-md-center'>
                <Col md='8' className="text-center">
                    <h2 className="mb-4">Bem-vindo à Nossa Plataforma de Cursos</h2>
                    <p className="lead mb-4">Aprenda novas habilidades e melhore sua carreira com nossos cursos online.</p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md='4'>
                    <Card className="mb-4">
                        <Card.Body className="text-center">
                            <FaBook size={50} className="mb-3" />
                            <Card.Title>Catálogo de Cursos</Card.Title>
                            <Card.Text>
                                Explore uma variedade de cursos em diferentes áreas, todos projetados para ajudá-lo a aprender e crescer.
                            </Card.Text>
                            <Button className="button-primary" href="/cursos">Ver Cursos</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card className="mb-4">
                        <Card.Body className="text-center">
                            <FaChalkboardTeacher size={50} className="mb-3" />
                            <Card.Title>Instrutores Qualificados</Card.Title>
                            <Card.Text>
                                Aprenda com especialistas da indústria e instrutores qualificados que estão prontos para compartilhar seus conhecimentos.
                            </Card.Text>
                            <Button className="button-primary" href="/instrutores">Conheça os Instrutores</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card className="mb-4">
                        <Card.Body className="text-center">
                            <FaCertificate size={50} className="mb-3" />
                            <Card.Title>Certificação</Card.Title>
                            <Card.Text>
                                Obtenha certificados reconhecidos que podem ajudar a impulsionar sua carreira e abrir novas oportunidades.
                            </Card.Text>
                            <Button className="button-primary" href="/certificacoes">Saiba Mais</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
