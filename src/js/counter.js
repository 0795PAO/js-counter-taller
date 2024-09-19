function add() {
    const counter = document.getElementById("number");
    let currentValue = parseInt(counter.innerHTML);
    counter.innerHTML = currentValue + 1;
}

function reset() {
    const counter = document.getElementById("number");
    counter.innerHTML = 0;
}

function decrease() {
    const counter = document.getElementById("number");  
    let currentValue = parseInt(counter.innerHTML);     
    if (currentValue > 0) {                            
        counter.innerHTML = currentValue - 1;           
    } else {
        counter.innerHTML = 0;                          
    }
};

export { add, reset, decrease }