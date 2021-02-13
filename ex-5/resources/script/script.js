let currValue = 0;
const incr = document.getElementById('incr');
const decr = document.getElementById('decr');
const count = document.getElementById('count');
count.style.color = '#333';

incr.addEventListener('click', function() {
    currValue += 1; 
    count.textContent = currValue;
    if (currValue > 0) {
         count.style.color = 'green';
     } else if (currValue < 0) {
         count.style.color = 'red';
     } else {
         count.style.color = '#333';
     }    
}, false);

decr.addEventListener('click', function() {
    currValue -= 1;   
    if (currValue > 0) {
        count.style.color = 'green';
    } else if (currValue < 0) {
        count.style.color = 'red';
    }   else {
        count.style.color = '#333';
    }
    count.textContent = currValue;
}, false);