function handleLogin(event) {
    event.preventDefault();
    
    var tokenInput = document.getElementById('token-input').value.trim();
    
    // Check if token is valid (for simplicity, let's assume any non-empty token is valid)
    if (tokenInput !== '') {
        // Store token in temporary cookie (expires when browser is closed)
        document.cookie = `token=${tokenInput}; path=/`;

        // Redirect to index.html (or your chat page)
        window.location.href = 'index.html';
    } else {
        alert('Please enter a valid token.');
    }
}
