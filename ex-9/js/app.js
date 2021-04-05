//code to collect DOM elements
//buttons
const types = document.querySelectorAll('.btn');
//each store item
const toChange = document.querySelectorAll(`[data-item]`);
//search bar
const searchParam = document.querySelector('#search-item');

//code for filter buttons
types.forEach(button => {
    button.addEventListener('click', (e)=>{
        const filter = e.target.dataset.filter;
        toChange.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'block'
            } else {
                if (item.classList.contains(filter)){
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            }            
        });

    })
});

//code for search bar
searchParam.addEventListener('keyup', function(e) {
    const filter = e.target.value;    
    toChange.forEach(item => {
        if (filter === 'all') {
            item.style.display = 'block'
        } else {
            if (item.classList.contains(filter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        }       
    });
}, true)


//code for modal
const modalWindow = document.getElementById('modal-wrapper');
const modalImg = document.getElementById('modal-img');
const modalButtons = document.querySelectorAll('[class^="modal-btn"]');
const images = document.querySelectorAll('[class^="card-img"]');
const limit = images.length;


images.forEach((image, index) => {
    let imgIndex = index;
    
    image.addEventListener('click', (e) => {
        let imgSrc = e.target.getAttribute('src');
        let bgImg = `url("${imgSrc}")`;       
        modalImg.style.backgroundImage = bgImg;
        modalWindow.style.display = 'block'; 

        // button eventlistener
        modalButtons.forEach(btn => {
            btn.addEventListener('click', (e)=> {
            const selBtn = e.target.classList;
            selBtn.forEach(cls => {
                //If to close window
                if (cls.includes('close')) {                
                    modalWindow.style.display = 'none'
                    }; 
                //index for left click     
                if (cls.includes('left')) {
                    imgIndex--;
                // index for righ      
                }  else if (cls.includes('right')){
                    imgIndex++;       
                };
                //manage index if at limit of the array
                if (imgIndex < 0) {
                    imgIndex = limit - 1;
                } else if (imgIndex === limit) {
                    imgIndex = 0
                }
                imgSrc = images[imgIndex].getAttribute('src');
                bgImg = `url("${imgSrc}")`; 
                modalImg.style.backgroundImage = bgImg;  

                });   
             })
        });
        // ends
    })
    
});




