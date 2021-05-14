/* 
    //find black screen element
    //create empty arrays to hold button presses
    //find all buttons
    //empty string used for join before convert to number
*/

const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const clearScreen = document.querySelector('.btn-clear');
const equal = document.querySelector('.btn-equal');
const screenValue = [];
const tempValue = [];
let dig = '';

/* 
    Helper functions
        // 1 - function to clear variables
        // 2 - function to populate string with joined value of tempValue before creating a number with that string in screenValue
*/

const clear = () => {
    dig = '';
    tempValue.length = 0;
    screenValue.length = 0;
    screen.value = '';
};

const convert = () => {
    dig = tempValue.join('')            
    screenValue.push(Number(dig));
};

/* 
    3 event listeners
    // 1. operators and numbers
    // 2. =
    // 3. clear
*/
//add event listener for numeric and operator buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const press = e.target.dataset.num;    
        if (press === '*' || press === '/' || press === '-' || press === '+') {            
            convert()  
            tempValue.length = 0;              
            screenValue.push(press);                       
            screen.value = screenValue.join('');             
        } else {
            tempValue.push(press);                                       
            screen.value = tempValue.join('');  
        };          
    })
});

//event listener for =
equal.addEventListener('click', (e) => {
    convert();         
    let sum = screenValue[0];
    for (let i = 1; i <= screenValue.length; i+=2) {              
        switch(screenValue[i]) {
            case '+':
                sum += screenValue[i + 1]
            break;
            case '-':
                sum -= screenValue[i + 1]
            break;
            case '*':
                sum *= screenValue[i + 1]                        
            break;
            case '/':
                sum /= screenValue[i + 1]
            break;
        };                 
    };
    clear();
    screen.value = sum;
});

//event listener for clear
clearScreen.addEventListener('click', (e) => {
    clear();
})
