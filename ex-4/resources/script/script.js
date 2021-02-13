const btn = document.getElementById('button');
const message = document.getElementById('message');
const lastMessage = document.getElementById('lastMessage');

btn.addEventListener('click', function() {
    let msgTxt;
    message.value === '' ? msgTxt = 'No value entered' : msgTxt = message.value;
    message.value = '';
    lastMessage.textContent = msgTxt;
}, false);