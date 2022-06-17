
var msgMind = window.document.querySelector('p#mind')
var msgDark = window.document.querySelector('p#dark')

msgMind.addEventListener('mouseenter', showtxt)
msgMind.addEventListener('mouseout', hiddentxt)



msgDark.addEventListener('mouseenter', showtxt)
msgDark.addEventListener('mouseout', hiddentxt)



function showtxt(){
    msgMind.innerHTML = 'Mind Palace'
    msgDark.innerHTML = 'Dark Day'
}

function hiddentxt(){
    msgMind.innerHTML = '...'
    msgDark.innerHTML = '...'
}