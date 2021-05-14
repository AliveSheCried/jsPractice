//HTML elemenent to append new div items
const cont = document.getElementById('container');
//Array of completed exercises & length
const exercises = [1,2,3,4,5,6,7,8,9,10];
//let count = exercises.length;

//loop through exercises array and create div nodes with links to add
const nodes = exercises.map(ex => {
    let div = document.createElement('div');
    let link = document.createElement('a');    
    div.className = 'grid-element';
    link.className = 'std-link';
    link.setAttribute('href', `./ex-${ex}/index.html`);
    link.textContent = `exercise ${ex}`;
    div.appendChild(link);       
    return div;

})

nodes.forEach(div => {
    cont.appendChild(div);
});

