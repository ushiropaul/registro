document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(error => { throw new Error(error.error) });
        }
        return response.json();
    })
    .then(data => {
        alert('Usuario registrado con éxito, ID: ' + data.id);
    })
    .catch(error => {
        alert('Error: ' + error.message);
        console.error('Error:', error);
    });
});
