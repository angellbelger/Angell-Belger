var msg = window.document.querySelector('p#mind')

msg.addEventListener('onmouseenter', showtxt())

function showtxt(){
    msg.innerHTML = 'Mind Palace'
}

