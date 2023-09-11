/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("user-input");
const lengthP = document.getElementById("length");
const volumeP = document.getElementById("volume");
const massP = document.getElementById("mass")

let value = 0;

convertBtn.addEventListener('click', function() {
    value = inputEl.value
    convertLength(value);
    convertVolume(value);
    convertMass(value);
})

function convertLength(inputValue) {
    const feet = (inputValue * 3.281).toFixed(3);
    const metres = (inputValue / 3.281).toFixed(3);
    const message = `${inputValue} meters = ${feet} | ${inputValue} feet = ${metres} meters`;
    lengthP.innerHTML = message;

}

function convertVolume(inputValue) {
    const gallons = (inputValue * 0.264).toFixed(3);
    const litres = (inputValue / 0.264).toFixed(3);
    const message = `${inputValue} litres = ${gallons} | ${inputValue} gallons = ${litres} litres`;
    volumeP.innerHTML = message;
}

function convertMass(inputValue) {
    const pounds = (inputValue * 2.204).toFixed(3);
    const kilos = (inputValue / 2.204).toFixed(3);
    const message = `${inputValue} kilograms = ${pounds} | ${inputValue} pounds = ${kilos} kilograms`;
    massP.innerHTML = message;
}