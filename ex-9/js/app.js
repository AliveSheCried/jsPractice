const types = ['all', 'cakes', 'cupcakes', 'sweets', 'doughnuts'];
const toChange = document.querySelectorAll(`[data-item]`);

//function to process button clicks
const filterButton = (e) => {    
    const button = e.target.getAttribute('data-filter');
    const status = document.querySelector(`[data-item=${CSS.escape(button)}]`)  
    function showHide(button) {
        if (status.style.display === 'none') {
            const toShow = document.querySelectorAll(`[data-item=${CSS.escape(button)}]`);           
            toShow.forEach(x => x.style.display = 'block');           
        };
        types.forEach(type => {
            if (type != button) {
                const toHide = document.querySelectorAll(`[data-item=${CSS.escape(type)}]`);           
                toHide.forEach(x => x.style.display = 'none'); 
            } 
        });
    }
    switch(button) {
        case 'all':
            toChange.forEach(x => x.style.display = 'block');
        break;   
        case 'cakes':
            showHide('cakes');
        break;  
        case 'cupcakes':            
            showHide('cupcakes');
        break;  
        case 'sweets':            
            showHide('sweets');
        break;
        case 'doughnuts':            
            showHide('doughnuts');
        break;
    }
};

// event listener for buttons
const pressedButton = document.getElementsByClassName('btn btn-outline-secondary btn-black text-uppercase filter-btn m-2');
for (let i = 0; i < pressedButton.length; i++) {
    pressedButton[i].addEventListener('click', filterButton);
};

//event listener for search bar
const searchParam = document.getElementById('search-icon');
let searchParamValue = document.getElementById('search-item');

searchParam.addEventListener('click', function() {
    searchParamValue = searchParamValue.value;
    console.log(searchParamValue)
})



