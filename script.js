const meter = 3.281; //feet
const liter = 0.264 // gallon
const kilogram = 2.204; // pound
const converterbtn = document.getElementById("converter_btn");
const displayLength = document.getElementById("length_text");
const displayVolume = document.getElementById("volume_text");
const displayMass = document.getElementById("mass_text");

function Meter() {
    const userInput = document.getElementById("user_input");
    if (userInput.value !== "") {
        const uservalue = userInput.value;
        const MeterToFeet = uservalue * meter;
        const FeetToMeter = uservalue / meter;
        const roundMeterToFeet = parseFloat(MeterToFeet.toFixed(3))
        const roundFeetToMeter = parseFloat(FeetToMeter.toFixed(3));
        displayLength.textContent = `${uservalue} meters = ${roundMeterToFeet} feet | ${uservalue} feet = ${roundFeetToMeter} meters`
    } else {
        displayLength.textContent = `0 meters = 0 feet | 0 feet = 0 meters`;
    }
}

function Liter() {
    const userInput = document.getElementById("user_input");
    if (userInput.value !== "") {
        const uservalue = userInput.value;
        const LiterToGallons = uservalue * liter;
        const GallonsToLiter = uservalue / liter;
        const roundLiterToGallons = parseFloat(LiterToGallons.toFixed(3));
        const roundGallonsToLiter = parseFloat(GallonsToLiter.toFixed(3));
        displayVolume.textContent = `${uservalue} liters = ${roundLiterToGallons} gallons | ${uservalue} gallons = ${roundGallonsToLiter} liters`
    } else {
        displayVolume.textContent = `0 liters = 0 gallons | 0 gallons = 0 liters`;
    }
}

function Kilogram() {
    const userInput = document.getElementById("user_input");
    if (userInput.value !== "") {
        const uservalue = userInput.value;
        const KilosToPounds = uservalue * kilogram;
        const PoundsToKilos = uservalue / kilogram;
        const roundKilosToPounds = parseFloat(KilosToPounds.toFixed(3));
        const roundPoundsTokilos = parseFloat(PoundsToKilos.toFixed(3));
        displayMass.textContent = `${uservalue} kilos = ${roundKilosToPounds} pounds | ${uservalue} pounds = ${roundPoundsTokilos} kilos`
    } else {
        displayMass.textContent = `0 kilos = 0 pounds | 0 pounds = 0 kilos`;
    }
}

converterbtn.addEventListener("click", Meter);
converterbtn.addEventListener("click", Liter);
converterbtn.addEventListener("click", Kilogram);