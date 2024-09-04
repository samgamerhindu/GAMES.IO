const colors = ['red', 'green', 'blue', 'yellow'];
let chosenColor = colors[Math.floor(Math.random() * 4)];

document.getElementById('colorName').textContent = chosenColor.toUpperCase();

function checkColor(color) {
    const message = document.getElementById('colorMessage');
    if (color === chosenColor) {
        message.textContent = 'Correct! You matched the color!';
        message.style.color = 'lime';
    } else {
        message.textContent = 'Wrong! Try again!';
        message.style.color = 'red';
    }
}
