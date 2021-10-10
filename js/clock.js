var rtClock = new Date();

function realtimeClock() {
    
    var fullyears = rtClock.setFullYear();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    var deneme = new Date().toLocaleString()
    var amPM = (hours < 12 ) ? "AM" : "PM";

    hours = (hours > 12 ) ? hours-12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    var writeClock = fullyears +" " + hours + " : " + minutes + " : " + seconds + " " + amPM;
    document.getElementById('clock').innerHTML =
    deneme;
    var t = setTimeout(realtimeClock,500);
    console.log( deneme);
}