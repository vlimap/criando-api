import React, { useState } from 'react';
import { Button, Container, Row, Col, Alert, Form } from 'react-bootstrap';
import cadastrarUsuario from '../../services/CadastrarUsuario';
import './CadastrarUsuarioPage.css'; // Adicione esta linha para importar o CSS específico

const CadastrarUsuarioPage = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        cpf: '',
        endereco: '',
        data_nascimento: '',
        senha: '',
        foto_perfil: null
    });

    const [mensagem, setMensagem] = useState();
    const [detalhesErro, setDetalhesErro] = useState();

    const atualizarForm = (estado) => {
        const { name, value } = estado.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    const atualizarFile = (estado) => {
        setFormData(prevFormData => ({ ...prevFormData, foto_perfil: estado.target.files[0] }));
    };

    const DadosEnvio = async (event) => {
        event.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        try {
            await cadastrarUsuario(data);
            setMensagem('Usuário cadastrado com sucesso');
            setDetalhesErro('');
        } catch (error) {
            setMensagem('Erro ao cadastrar usuário');
            if (error.response && error.response.data && error.response.data.detalhes) {
                setDetalhesErro(error.response.data.detalhes);
            } else if (error.request) {
                setDetalhesErro('Erro de rede:' + error.message);
                console.log('Erro de rede:', error);
            } else {
                setDetalhesErro(error.message);
                console.log('Erro:', error);
            }
        }
    };

    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col md='6'>
                    <h2 className="text-center mb-4">Cadastro de Usuários</h2>
                    {mensagem && (
                        <Alert variant={mensagem.includes('sucesso') ? 'success' : 'danger'}>
                            {mensagem}
                            {detalhesErro && (
                                <div>
                                    <strong>Detalhes:</strong> {detalhesErro}
                                </div>
                            )}
                        </Alert>
                    )}
                    <Form onSubmit={DadosEnvio}>
                        <Form.Group>
                            <Form.Label htmlFor="nome">Nome:</Form.Label>
                            <Form.Control type="text" id="nome" name="nome" value={formData.nome} onChange={atualizarForm} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email">E-mail:</Form.Label>
                            <Form.Control type="email" id="email" name="email" value={formData.email} onChange={atualizarForm} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="telefone">Telefone:</Form.Label>
                            <Form.Control type="telefone" id="telefone" name="telefone" value={formData.telefone} onChange={atualizarForm} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="cpf">CPF:</Form.Label>
                            <Form.Control type="text" id="cpf" name="cpf" value={formData.cpf} onChange={atualizarForm} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="endereco">Endereço completo:</Form.Label>
                            <Form.Control type="text" id="endereco" name="endereco" value={formData.endereco} onChange={atualizarForm} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="data_nascimento">Data de nascimento:</Form.Label>
                            <Form.Control type="date" id="data_nascimento" name="data_nascimento" value={formData.data_nascimento} onChange={atualizarForm} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="senha">Senha:</Form.Label>
                            <Form.Control type="password" id="senha" name="senha" value={formData.senha} onChange={atualizarForm} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="foto_perfil">Foto perfil:</Form.Label>
                            <Form.Control type="file" id="foto_perfil" name="foto_perfil" onChange={atualizarFile} />
                        </Form.Group>
                        <Button className="mt-3 mb-3 button-primary" variant="primary" type="submit">Cadastrar</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default CadastrarUsuarioPage;
