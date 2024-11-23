document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');
    const messageElement = document.getElementById('message');
    
    // Generar un número aleatorio entre 1 y 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    submitButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);
        
        if (isNaN(userGuess)) {
            messageElement.textContent = 'Por favor, ingresa un número válido.';
            return;
        }
        
        if (userGuess < randomNumber) {
            messageElement.textContent = 'Demasiado bajo. Intenta de nuevo.';
        } else if (userGuess > randomNumber) {
            messageElement.textContent = 'Demasiado alto. Intenta de nuevo.';
        } else {
            messageElement.textContent = '¡Felicidades! Has adivinado el número.';
        }
    });
});
