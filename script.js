
var msgMind = window.document.querySelector('p#mind')
var msgDark = window.document.querySelector('p#dark')

msgMind.addEventListener('mouseenter', showtxt)
msgMind.addEventListener('mouseout', hiddentxt)
msgMind.addEventListener('touchstart', showtxt)
msgMind.addEventListener('touchend', hiddentxt)



msgDark.addEventListener('mouseenter', showtxt)
msgDark.addEventListener('mouseout', hiddentxt)
msgDark.addEventListener('touchstart', showtxt)
msgDark.addEventListener('touchend', hiddentxt)



function showtxt(){
    msgMind.innerHTML = 'Mind Palace'
    msgDark.innerHTML = 'Dark Day'
}

function hiddentxt(){
    msgMind.innerHTML = '...'
    msgDark.innerHTML = '...'
}