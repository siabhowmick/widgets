const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
    var date = new Date();
    //console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    //console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

    // Convert the time to degrees in circle to place the clock hands in the correct position
    // The second arm divides the clock into 60 equal segments for the 60 seconds in a minute
    // The minute arm divides the clock into 60 equal segments for the the 60 minutes in an hour
    // The hour arm divides the clock into 12 equal segments for the 12 hours allowed on the clock face

    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);
