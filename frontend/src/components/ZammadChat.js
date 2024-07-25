import React, { useEffect, useState } from 'react';

const ZammadChat = () => {
    const [chatInitialized, setChatInitialized] = useState(false);

    const loadScript = (src, onLoad) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = onLoad;
        script.onerror = () => console.error(`Erro ao carregar o script: ${src}`);
        document.body.appendChild(script);
        return script;
    };

    useEffect(() => {
        console.log('Adicionando script do jQuery...');
        loadScript('https://code.jquery.com/jquery-3.6.0.min.js', () => {
            console.log('jQuery carregado.');
            loadScript('https://face.zammad.com/assets/chat/chat.min.js', () => {
                console.log('Script do ZammadChat carregado.');
                if (window.ZammadChat) {
                    try {
                        new window.ZammadChat({
                            title: 'Abrir chat',
                            background: 'rgb(26, 115, 232)',
                            fontSize: '12px',
                            chatId: 1,
                            show: false
                        });
                        setChatInitialized(true);
                        console.log('ZammadChat inicializado.');
                    } catch (error) {
                        console.error('Erro ao inicializar o ZammadChat:', error);
                    }
                } else {
                    console.error('ZammadChat não está disponível.');
                }
            });
        });
    }, []);

    const handleChatButtonClick = () => {
        if (window.ZammadChat && chatInitialized) {
            // Utilize a API correta para mostrar o chat
            const chatButton = document.querySelector('.open-zammad-chat');
            if (chatButton) {
                chatButton.click();
            } else {
                console.error('Botão do ZammadChat não encontrado.');
            }
        } else {
            console.error('ZammadChat não está disponível para ser mostrado.');
        }
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <button onClick={handleChatButtonClick} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Abrir Chat
            </button>
        </div>
    );
};

export default ZammadChat;
