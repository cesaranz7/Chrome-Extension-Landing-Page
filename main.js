// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    goal = document.getElementById('goal');

// Options
const showAmPm = true;

// Show time function
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes();
    sec = today.getSeconds();

    // Set AM or PM

    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr format

    hour = hour % 12 || 12;

    // output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set background and greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('../images/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        //Afternoon
        document.body.style.backgroundImage = "url('../images/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
        
    } else {
        //Evening
        document.body.style.backgroundImage = "url('../images/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// Get name 
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        //make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }

    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Set Goal
function setGoal(e) {
    if (e.type === 'keypress') {
        //make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('goal', e.target.innerText);
            goal.blur();
        }

    } else {
        localStorage.setItem('goal', e.target.innerText);
    }
}

// Get goal
function getgoal() {
    if (localStorage.getItem('goal') === null) {
        goal.textContent = '[Enter goal]';
    } else {
        goal.textContent = localStorage.getItem('goal');
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
goal.addEventListener('keypress', setGoal);
goal.addEventListener('blur', setGoal);

//Run
showTime();
setBgGreet();
getName();
getgoal();