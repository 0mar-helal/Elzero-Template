//Start Latest Events
// The End Of Ramdan month Date To Countdown To
// 1000 milliseconds = 1 Second
let countDown= new Date("Apr 30,2023 23:59:59").getTime();

let counter=setInterval(()=> {
    // Get Date Now
    let dateNow = new Date().getTime();
    // Find The Date Difference Between Now And Countdown Date
    let dateDiff= countDown - dateNow ;

    let days = Math.floor((dateDiff)/(1000 * 60 * 60 * 24));
    let hours= Math.floor(((dateDiff)%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutes= Math.floor(((dateDiff)%(1000 * 60 * 60 ))/(1000 * 60));
    let seconds= Math.floor(((dateDiff)%(1000 * 60))/(1000));

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if(dateDiff < 0) {
        clearInterval(counter);
    } 
})
//End Latest Events

//Start Our Skills
let skillSection = document.querySelector(".skills");
let progSpans =document.querySelectorAll(".skills .prog-holder span");
window.onscroll = function () {
    
};
//End Our Skills

//Start Awesome Stats
let statSection =document.querySelector(".awesom-stats");
let numSpans =document.querySelectorAll(".awesom-stats .card span");
console.log(numSpans);
let started = false; // Function Started ? No

function startCount (el) {
    let goal =el.dataset.goal;
    let counter =setInterval(()=> {
        el.textContent++;
        if(el.textContent===goal) clearInterval(counter);
    }, 100/goal);
}
//End Awesome Stats

// window scroll for 2 sections
window.onscroll = function () {
    // Awesome Stats
    if (window.scrollY >= statSection.offsetTop -250) {
        if (!started) {
            numSpans.forEach((num) => startCount(num));
        }
        started = true;
    }
    //Our Skills
    if(window.scrollY>=skillSection.offsetTop-150) {
        progSpans.forEach((span) => {
            span.style.width=span.dataset.width;
        });
    }
};