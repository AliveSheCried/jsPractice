//buttons
const incr = document.getElementById('incr');
const decr = document.getElementById('decr');
// fields to populate
const pic = document.getElementById('car');
const txt = document.getElementById('txt');
const client = document.getElementById('client');
// img path
const path = './resources/images/'

//Class for testimonial
class Testimonial {
    constructor(client, desc, img) { 
      this.client = client;
      this.desc = desc;
      this.img = img;
    }
   };
 // Array of testimonials to loop through 
  const testimonials = [
    new Testimonial('ABC', 'Javascript Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation', 'car-1.png'),
    new Testimonial('DEF', 'Rest API Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation', 'car-2.png'),
    new Testimonial('GHI', 'Openbanking Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation', 'car-3.png'),
    new Testimonial('JKL', 'Node.js Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation', 'car-4.png'),
    new Testimonial('MNO', 'Something else Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation', 'car-5.png'),
  ];

//loooping constraints
let limit = testimonials.length;
let position = 0;

incr.addEventListener('click', function() {
    position ++;     
    if (position === limit) {
        position = 0;
    } 
    //assigning values to fields
    pic.src = `${path}${testimonials[position].img}`; 
    client.textContent = testimonials[position].client;
    txt.textContent = testimonials[position].desc; 
}, false);

decr.addEventListener('click', function() {       
    if (position < 0) {
        position = limit - 1;
    } 
    pic.src = `${path}${testimonials[position].img}`; 
    client.textContent = testimonials[position].client;
    txt.textContent = testimonials[position].desc; 
    position --;  
}, false);



