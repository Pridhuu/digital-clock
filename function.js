function updateTime() {
    const time = new Date();
    let hours = time.getHours();
    hours = hours % 12 || hours;
    let meridiem = hours >= 12 ? "am" : "pm";
    hours = hours.toString().padStart(2, 0);
    let minutes = time.getMinutes().toString().padStart(2, 0);
    let seconds = time.getSeconds().toString().padStart(2, 0);
    let timeString = `${hours} : ${minutes} : ${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}
updateTime();
setInterval(updateTime, 1000); 