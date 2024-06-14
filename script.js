// Function to send a message
function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value.trim();

    // Get token from cookie
    var token = getCookie('token');

    if (message !== '' && token) {
        // Format message with token
        var formattedMessage = `${token}: ${message}`;
        
        // Display message in the chat
        displayMessage(formattedMessage);
        
        // Clear message input
        messageInput.value = '';
    } else {
        alert('Please enter a message.');
    }
}

// Function to display a message in the chat
function displayMessage(message) {
    var chatMessages = document.getElementById('chat-messages');
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
}

// Function to get cookie value by name
function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}
