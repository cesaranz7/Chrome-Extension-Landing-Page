// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

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
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

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

//Run
showTime();
setBgGreet();