
var msgMind = window.document.querySelector('p#mind')
var msgDark = window.document.querySelector('p#dark')
var msgWoman = window.document.querySelector('p#woman')

/* Event Listener */

msgMind.addEventListener('mouseenter', show_mind)
msgMind.addEventListener('mouseout', hidden_mind)
msgMind.addEventListener('touchstart', show_mind)
msgMind.addEventListener('touchmove', show_mind)
msgMind.addEventListener('touchend', hidden_mind)



msgDark.addEventListener('mouseenter', show_dark)
msgDark.addEventListener('mouseout', hidden_dark)
msgDark.addEventListener('touchstart', show_dark)
msgDark.addEventListener('touchmove', show_dark)
msgDark.addEventListener('touchend', hidden_dark)



msgWoman.addEventListener('mouseenter', show_woman)
msgWoman.addEventListener('mouseout', hidden_woman)
msgWoman.addEventListener('touchstart', show_woman)
msgWoman.addEventListener('touchmove', show_woman)
msgWoman.addEventListener('touchend', hidden_woman)

/* ------------------------------------------------------ */

/* Show MSG */

function show_mind(){
    msgMind.innerHTML = 'Palácio Mental'
}

function show_dark(){
    msgDark.innerHTML = 'Dia Sombrio'
}

function show_woman(){
    msgWoman.innerHTML = 'Corpo Celeste e a dedução'
}

/* ------------------------------------------------------ */

/* Hidden MSG */

function hidden_mind(){
    msgMind.innerHTML = '...'
}

function hidden_dark(){
    msgDark.innerHTML = '...'
}

function hidden_woman(){
    msgWoman.innerHTML = '...'
}

/* ------------------------------------------------------ */
