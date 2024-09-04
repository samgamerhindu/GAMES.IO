let sequence = [];
let userSequence = [];
const colors = ['red', 'green', 'blue', 'yellow'];

function startGame() {
    sequence = [];
    userSequence = [];
    addColorToSequence();
    displaySequence();
}

function addColorToSequence() {
    const randomColor = colors[Math.floor(Math.random() * 4)];
    sequence.push(randomColor);
}

function displaySequence() {
    const sequenceDiv = document.getElementById('sequence');
    sequenceDiv.textContent = '';
    sequence.forEach((color, index) => {
        setTimeout(() => {
            sequenceDiv.textContent = color.toUpperCase();
            sequenceDiv.style.color = color;
        }, index * 1000);
    });
}

function userInput(color) {
    userSequence.push(color);
    checkSequence();
}

function checkSequence() {
    for (let i = 0; i < userSequence.length; i++) {
        if (userSequence[i] !== sequence[i]) {
            document.getElementById('memoryMessage').textContent = 'Wrong sequence! Try again.';
            return;
        }
    }
    
    if (userSequence.length === sequence.length) {
        document.getElementById('memoryMessage').textContent = 'Correct! Ready for the next round?';
        addColorToSequence();
        setTimeout(displaySequence, 1000);
        userSequence = [];
    }
}
