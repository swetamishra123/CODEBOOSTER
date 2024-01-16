function updateTime() {
    const clock = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; // Convert to 12-hour format

    const timeString = `${hours}:${padZero(minutes)}:${padZero(seconds)} ${period}`;
    clock.textContent = timeString;
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Initial call to set the time
updateTime();

// Update the time every second
setInterval(updateTime, 1000);
