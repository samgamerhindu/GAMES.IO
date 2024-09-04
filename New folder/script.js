// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const message = document.getElementById('message');
    
    if (isNaN(guess)) {
        message.textContent = 'Please enter a valid number.';
    } else if (guess < randomNumber) {
        message.textContent = 'Too low! Try again.';
    } else if (guess > randomNumber) {
        message.textContent = 'Too high! Try again.';
    } else {
        message.textContent = 'Congratulations! You guessed it right!';
    }
}
