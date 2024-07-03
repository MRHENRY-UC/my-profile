const tabsEl = document.querySelector(".navbar");

const btns = document.querySelectorAll(".btn");

const articles = document.querySelectorAll(".content");

tabsEl.addEventListener("click", (event)=>{

const id = event.target.dataset.id;

if(id){
    btns.forEach((btn)=>{
        btn.classList.remove("live")
    });
    event.target.classList.add("live");
    articles.forEach((article)=>{
        article.classList.remove("live");
    });
    const element = document.getElementById(id);
    element.classList.add("live");
}
});
function upDateUTCTime(){
    let now = new Date();
    let options = {hour: '2-digit', minute: '2-digit', timeZone: 'UTC' };
    
    let currentTime = now.toLocaleString('en-US', options)

    document.getElementById("currentTime").textContent = `Current Time in UTC: ` + `${currentTime}`;
}
upDateUTCTime();

function upDateUTCDay(){
    let now = new Date();
    let options = {weekday: 'long',  };
    
    let currentDay = now.toLocaleString('en-US', options)

    document.getElementById("currentDay").textContent = `Current Day of the Week: ` + `${currentDay}`;
}
upDateUTCDay();



function upDateName() {
    let nameEl = 'Henry Edeh';
    document.getElementById("name").textContent = `Slack Name: ${nameEl}`;
}
upDateName();

function upDateEmail() {
    let emailEl = 'henryuc4@gmail.com';
    document.getElementById("email").textContent = `Email: ${emailEl}`;
}
upDateEmail();

function upDateUserId() {
    let userIdEl = 'HenryUc';
    document.getElementById("user-id").textContent = `Slack Username: ${userIdEl}`;
}
upDateUserId();
