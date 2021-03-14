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
const modalWindow = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalButtons = document.querySelectorAll('[class^="modal-btn"]');
const images = document.querySelectorAll('[class^="card-img"]');

images.forEach((image, index) => {
    const imgIndex = index;
    image.addEventListener('click', (e) => {
        const selImg = `url("${e.target.getAttribute('src')}")`;       
        modalImg.style.backgroundImage = selImg;
        modalWindow.style.display = 'block'; 

        // button eventlistener
        modalButtons.forEach(btn => {
        btn.addEventListener('click', (e)=> {
        const selBtn = e.target.classList;  
        selBtn.forEach(cls => {
            if (cls.includes('close')) {                
                modalWindow.style.display = 'none'
                  }  
              });   
             })
        });
        // ends
    })
    
});




//Original code for filter buttons - worked, but not svelte
//function to show/hide tiles for selected/entered item
// function showHide(button) {
//     if (button === 'all') {
//         toChange.forEach(x => x.style.display = 'block');
//     } else {
//         const status = document.querySelector(`[data-item=${CSS.escape(button)}]`) 
//         if (status.style.display === 'none') {
//             const toShow = document.querySelectorAll(`[data-item=${CSS.escape(button)}]`);           
//             toShow.forEach(x => x.style.display = 'block');           
//         };
//         types.forEach(type => {
//             if (type != button) {
//                 const toHide = document.querySelectorAll(`[data-item=${CSS.escape(type)}]`);           
//                 toHide.forEach(x => x.style.display = 'none'); 
//             } 
//         })
//     };    
// }
// //function to process button clicks
// const filterButton = (e) => {  
//     //which buttton is pressed  
//     const button = e.target.getAttribute('data-filter');
//     //pass value to show hide        
//     showHide(button);
// };

// // event listener for buttons
// const pressedButton = document.getElementsByClassName('btn btn-outline-secondary btn-black text-uppercase filter-btn m-2');
// for (let i = 0; i < pressedButton.length; i++) {
//     pressedButton[i].addEventListener('click', filterButton);
// };