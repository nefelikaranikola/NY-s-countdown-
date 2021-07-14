//create a function for every different functionality

const countdown = () => {
    //target date
    const countDate = new Date('December 31, 2021 00:00:00').getTime();
    //present date
    const now = new Date().getTime();
    //countdown
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculation
    //math.floor pushes it down to a full number
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

    //if(gap == 0){
        //launchFireworks();
    //}
};

//execute 
//use setInterval to update automatically without refreshing the page
setInterval(countdown, 1000);

