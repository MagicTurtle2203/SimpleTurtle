function getDate() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();
    let day = today.getDay();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let ampm;
    if (hours <= 12) {
        ampm = 'AM';
    } else if (hours > 12) {
        ampm = 'PM';
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (minutes < 10) {
        minutes = '0'+minutes.toString();
    }
    if (seconds < 10) {
        seconds = '0'+seconds.toString();
    }
    let daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementById('date').innerHTML = `It is now ${hours}\:${minutes}\:${seconds} ${ampm} on ${daylist[day]}, ${monthlist[month]} ${date}, ${year}`;
}
setInterval(getDate, 1000);
