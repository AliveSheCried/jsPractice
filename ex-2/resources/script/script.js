const div = document.getElementById('btn')
const btn = document.getElementById('button');
const hex = document.getElementById('hex');
const clrs = ['#007bff','#6610f2','#6f42c1','#e83e8c','#dc3545','#fd7e14','#ffc107','#28a745','#20c997','#17a2b8','#6c757d'];

btn.addEventListener('click', function() {
    let newCol = '#';
    let x = clrs.length;
       
    for(let i = 0; i < 6; i++) {
        let arr = Math.floor(Math.random() * x);
        let z = Math.floor((Math.random() * 5) + 1);   
        newCol += clrs[arr][z];        
    }

    div.style.backgroundColor = newCol;
    hex.textContent = newCol;
}, false);