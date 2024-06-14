function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value.trim();
    
    if (message !== '') {
        displayMessage(message);
        messageInput.value = '';
    }
}

function displayMessage(message) {
    var chatMessages = document.getElementById('chat-messages');
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
}
