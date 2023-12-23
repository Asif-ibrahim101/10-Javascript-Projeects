//all the selectors
let Months = document.getElementById("Months");
let Days = document.getElementById("Days");
let Hours = document.getElementById("Hours");
let Minutes = document.getElementById("Mintues");
let Secconds = document.getElementById("Seconds");

//settting the desired time
let CountDown_time = new Date("Feb 5, 2024 15:37:25").getTime();
// let CountDown_time = new Date('2024-01-01').getTime();

//Update the countdown every second
let Time = setInterval(()=> {
    //get the current time
    let Recent_time = new Date().getTime();

    //calculate the difrence btw reccent time and the desired time
    let diffrence_time = CountDown_time - Recent_time;

    //Calculate all the times 
    let month = Math.floor(diffrence_time / (1000 * 60 * 60 * 24 * 30));
    let Day = Math.floor(diffrence_time / (1000 * 60 * 60 * 24));
    let Hour = Math.floor((diffrence_time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    let Minute = Math.floor((diffrence_time % (1000 * 60 * 60 * 24) / (1000 * 60)));
    let second = Math.floor((diffrence_time % (1000 * 60 * 60 * 24) / 1000));

    //showing the time in the webpage
    Months.innerHTML = month;
    Days.innerHTML = Day;
    Hours.innerHTML = Hour;
    Minutes.innerHTML = Minute;
    Secconds.innerHTML = second;

    if(diffrence_time < 0) {
        clearInterval(Time);
        alert("Experied");
    };
}, 1000);
