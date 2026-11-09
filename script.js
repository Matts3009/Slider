// Get DOM element references
const buttonChangeColor = document.getElementById('buttonChangeColor');
const redSlider = document.querySelector('input[name="redSlider"]');
const redBox = document.querySelector('.red.box');

// 1. Change the background color to a random color when clicking "Change color"
buttonChangeColor.addEventListener('click', () => {
    // Generate random values for Red, Green, and Blue (0 to 255)
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    // Apply the random background color to the body
    document.body.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
});

// 2. Update the box's red color channel dynamically when moving the slider
redSlider.addEventListener('input', (event) => {
    const redValue = event.target.value;
    redBox.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
});