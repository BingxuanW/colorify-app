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
