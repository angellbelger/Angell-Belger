
/*  GLOBAL  */

var msgMind = window.document.querySelector('p#mind')
var msgDark = window.document.querySelector('p#dark')
var msgWoman = window.document.querySelector('p#woman')


var boxMind = window.document.querySelector('div#sd01')
var boxDark = window.document.querySelector('div#sd02')
var boxWoman = window.document.querySelector('div#sd03')

/* ------------------------------------------------------ */


/* Event Listener */

boxMind.addEventListener('mouseenter', show_mind)
boxMind.addEventListener('mouseout', hidden_mind)
boxMind.addEventListener('touchstart', show_mind)
boxMind.addEventListener('touchmove', show_mind)
boxMind.addEventListener('touchend', hidden_mind)



boxDark.addEventListener('mouseenter', show_dark)
boxDark.addEventListener('mouseout', hidden_dark)
boxDark.addEventListener('touchstart', show_dark)
boxDark.addEventListener('touchmove', show_dark)
boxDark.addEventListener('touchend', hidden_dark)



msgWoman.addEventListener('mouseenter', show_woman)
msgWoman.addEventListener('mouseout', hidden_woman)
msgWoman.addEventListener('touchstart', show_woman)
msgWoman.addEventListener('touchmove', show_woman)
msgWoman.addEventListener('touchend', hidden_woman)
boxWoman.addEventListener('mouseenter', show_woman)
boxWoman.addEventListener('mouseout', hidden_woman)
boxWoman.addEventListener('touchstart', show_woman)
boxWoman.addEventListener('touchmove', show_woman)
boxWoman.addEventListener('touchend', hidden_woman)

/* ------------------------------------------------------ */

/* Show MSG */

function show_mind(){
    msgMind.innerHTML = 'Palácio Mental'
}

function show_dark(){
    msgDark.innerHTML = 'Dia Sombrio'
}

function show_woman(){
    msgWoman.innerHTML = 'Corpo Celeste'
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
