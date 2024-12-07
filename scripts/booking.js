/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const fullDayCost = 35; 
const halfDayCost = 20; 

let selectedDays = [];
let currentRate = fullDayCost;

const dayElements = document.querySelectorAll('.day-selector li'); 
const fullButton = document.getElementById('full'); 
const halfButton = document.getElementById('half');
const calculatedCost = document.getElementById('calculated-cost'); 
const clearButton = document.getElementById('clear-button'); 

function updateCost() {
    const totalCost = selectedDays.length * currentRate; 
    calculatedCost.innerHTML = totalCost; 
}

function handleDaySelection(day) {
    let isDaySelected = false;

    for (let i = 0; i < selectedDays.length; i++) {
        if (selectedDays[i] === day.id) {
            isDaySelected = true;
            break;
        }
    }

    if (isDaySelected) {
        let newSelectedDays = [];
        for (let i = 0; i < selectedDays.length; i++) {
            if (selectedDays[i] !== day.id) {
                newSelectedDays.push(selectedDays[i]);
            }
        }
        selectedDays = newSelectedDays;
        day.classList.remove('clicked');
    } else {
        selectedDays.push(day.id);
        day.classList.add('clicked');
    }

    updateCost(); 
}

dayElements.forEach(function(day) {
    day.addEventListener('click', function () {
        handleDaySelection(day); 
    });
});

fullButton.addEventListener('click', function () {
    currentRate = fullDayCost; 
    fullButton.classList.add('clicked'); 
    halfButton.classList.remove('clicked'); 
    updateCost(); 
});

halfButton.addEventListener('click', function () {
    currentRate = halfDayCost; 
    halfButton.classList.add('clicked'); 
    fullButton.classList.remove('clicked'); 
    updateCost(); 
});

clearButton.addEventListener('click', function () {
    selectedDays = [];
    dayElements.forEach(function(day) {
        day.classList.remove('clicked');
    });
    fullButton.classList.remove('clicked'); 
    halfButton.classList.remove('clicked'); 
    calculatedCost.innerHTML = '0'; 
});
