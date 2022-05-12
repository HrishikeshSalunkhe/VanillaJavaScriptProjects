const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const clickMeBtn = document.querySelector('#btn');
const displayColorValue = document.querySelector('.color');

clickMeBtn.addEventListener('click',function(){
   let hexValue = "#";
   for(let i =0; i<6;++i){
       hexValue += hex[getRandomValue()];
   }
   document.body.style.backgroundColor = hexValue;
   displayColorValue.textContent = hexValue; 
});

function getRandomValue(){
    return Math.floor(Math.random()*hex.length);
}
