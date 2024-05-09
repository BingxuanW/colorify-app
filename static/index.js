// index.js
const circle = document.querySelector('.circle');
const redButton = document.querySelector('.red-button');
const greenButton = document.querySelector('.green-button');
const yellowButton = document.querySelector('.yellow-button');

redButton.addEventListener('click', () => {
    circle.style.backgroundColor = 'red';
});

greenButton.addEventListener('click', () => {
    circle.style.backgroundColor = 'green';
});

yellowButton.addEventListener('click', () => {
    circle.style.backgroundColor = 'yellow';
});

function changeCircleColor(color) {
    // Send an HTTP request to the server
    fetch(`/change_color/${color}`)
        .then(response => response.text())
        .then(message => {
            console.log(message); // Log the server response (optional)
            circle.style.backgroundColor = color; // Update the circle color
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
