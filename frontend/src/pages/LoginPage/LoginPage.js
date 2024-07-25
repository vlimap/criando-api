import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import loginUsuario from '../../services/LoginUsuario';
import './LoginPage.css'; 

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUsuario(email, senha);
            localStorage.setItem('usuario', JSON.stringify(response.usuario));
            localStorage.setItem('token', response.token);
            navigate('/');
        } catch (error) {
            setError('Erro ao fazer login');
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h2 className="text-center mb-4">Login</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formSenha">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button className="mt-3 mb-3 button-primary" variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
