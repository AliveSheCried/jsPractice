const incr = document.getElementById('incr');
const decr = document.getElementById('decr');
const pic = document.getElementById('car');
const images = ['car-1.png', 'car-2.png', 'car-3.png', 'car-4.png', 'car-5.png'];
const path = './resources/images/'
let limit = images.length;
let position = 0;

incr.addEventListener('click', function() {
    position ++; 
    console.log(position)
        if (position === limit) {
            position = 0;
        } 
        pic.src = `${path}${images[position]}`;  
}, false);

decr.addEventListener('click', function() {
    
    console.log(position)
        if (position === 0) {
            position = 5;
        } 
        pic.src = `${path}${images[position]}`; 
        position --;  
}, false);



