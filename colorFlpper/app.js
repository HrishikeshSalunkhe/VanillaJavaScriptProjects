const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const clickMeBtn = document.querySelector('#btn');
const  displayColorValue = document.querySelector(".color");

clickMeBtn.addEventListener('click',function(){
    let colorIndex = getRandomNumber();
    document.body.style.backgroundColor = colors[colorIndex];
    displayColorValue.textContent = colors[colorIndex];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}