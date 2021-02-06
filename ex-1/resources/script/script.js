const div = document.getElementById('btn')
const btn = document.getElementById('button');
const clrs = ['#007bff','#6610f2','#6f42c1','#e83e8c','#dc3545','#fd7e14','#ffc107','#28a745','#20c997','#17a2b8','#6c757d','#fff'];

btn.addEventListener('click', function() {
    let x = clrs.length;
    let y = Math.floor(Math.random() * x);
    div.style.backgroundColor = clrs[y];
}, false);