import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Layout/Header';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SobrePage from './pages/AboutPage/AboutPage';
import ContatoPage from './pages/ContactPage/ContactPage';
import CadastrarUsuarioPage from './pages/CadastrarUsuario/CadastrarUsuarioPage';
import Footer from './components/Layout/Footer';
import ZammadChat from './components/ZammadChat';
import './App.css'; // Certifique-se de importar os estilos globais aqui

const App = () => {
    return (
        <Router>
            <NavigationBar />
            <ZammadChat />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sobre" element={<SobrePage />} />
                <Route path="/contato" element={<ContatoPage />} />
                <Route path="/cadastrar" element={<CadastrarUsuarioPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
