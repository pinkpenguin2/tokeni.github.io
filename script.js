// Function to send a message
function sendMessage(user) {
    var messageInput;
    var chatMessages;
    
    if (user === 'a') {
        messageInput = document.getElementById('message-input-a');
        chatMessages = document.getElementById('chat-messages-a');
    } else if (user === 'b') {
        messageInput = document.getElementById('message-input-b');
        chatMessages = document.getElementById('chat-messages-b');
    } else {
        console.error('Invalid user identifier');
        return;
    }

    var message = messageInput.value.trim();

    if (message !== '') {
        // Save message to local storage
        var messages = JSON.parse(localStorage.getItem(`messages-${user}`)) || [];
        messages.push(message);
        localStorage.setItem(`messages-${user}`, JSON.stringify(messages));

        // Display message in the chat
        displayMessage(message, chatMessages);
        
        // Clear message input
        messageInput.value = '';
    } else {
        alert('Please enter a message.');
    }
}

// Function to display messages for a user
function displayMessages(user) {
    var chatMessages;
    
    if (user === 'a') {
        chatMessages = document.getElementById('chat-messages-a');
    } else if (user === 'b') {
        chatMessages = document.getElementById('chat-messages-b');
    } else {
        console.error('Invalid user identifier');
        return;
    }

    // Retrieve messages from local storage
    var messages = JSON.parse(localStorage.getItem(`messages-${user}`)) || [];

    // Display each message
    messages.forEach(function(message) {
        displayMessage(message, chatMessages);
    });
}

// Function to display a message in a specific chat area
function displayMessage(message, chatMessages) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
}

// On page load, display existing messages for each user
document.addEventListener('DOMContentLoaded', function() {
    displayMessages('a');
    displayMessages('b');
});
