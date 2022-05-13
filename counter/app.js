// I used Event-delegation concept for this App.


// Select the btn-container class to apply Event Delegation
const btnContainer = document.querySelector("#btn-container");

// Add a Event Listener on Parent i.e.(btn-container)
btnContainer.addEventListener('click', function(event){

    //Select the span element with id="value" to update the Counter
    const dispalyedValue = document.querySelector("#value");

    // Variable to Update the Value
    let counterValue = Number(dispalyedValue.textContent);
    dispalyedValue.style.color = "red";

    // target the Specified Button Element using classList(returns Object) 
     // To check output un-comment below line
    // console.log(event.target.classList);  
    const btnClass = event.target.classList;
    
    // In returned Object Value at 2 postion of object is our required class
    const targetClass = btnClass[1];
    if(targetClass === 'increase'){
        counterValue +=1;
    }
    else if(targetClass === 'reset'){
        counterValue = 0;
    }
    else{
        counterValue -=1;
    }
    dispalyedValue.textContent = counterValue;
});