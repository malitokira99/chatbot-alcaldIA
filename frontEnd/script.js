function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = chatContainer.style.display === 'none' || chatContainer.style.display === '' ? 'flex' : 'none';
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    if (userInput.value.trim() !== "") {
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = userInput.value;
        chatBox.appendChild(userMessage);

        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.textContent = 'Estoy procesando tu mensaje...';
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;
        userInput.value = '';

        // Aquí puedes agregar la lógica para enviar el mensaje al servidor y obtener una respuesta
    }
}
