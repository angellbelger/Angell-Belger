
/*  GLOBAL  */

var msgMind = window.document.querySelector('p#mind')
var msgDark = window.document.querySelector('p#dark')
var msgWoman = window.document.querySelector('p#woman')
var msgLie = window.document.querySelector('p#lie')
var msgCab = window.document.querySelector('p#cab')


var boxMind = window.document.querySelector('div#sd01')
var boxDark = window.document.querySelector('div#sd02')
var boxWoman = window.document.querySelector('div#sd03')
var boxLie = window.document.querySelector('div#sd04')
var boxCab = window.document.querySelector('div#sd05')


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



msgLie.addEventListener('mouseenter', show_lie)
msgLie.addEventListener('mouseout', hidden_lie)
msgLie.addEventListener('touchstart', show_lie)
msgLie.addEventListener('touchmove', show_lie)
msgLie.addEventListener('touchend', hidden_lie)
boxLie.addEventListener('mouseenter', show_lie)
boxLie.addEventListener('mouseout', hidden_lie)
boxLie.addEventListener('touchstart', show_lie)
boxLie.addEventListener('touchmove', show_lie)
boxLie.addEventListener('touchend', hidden_lie)



msgCab.addEventListener('mouseenter', show_cab)
msgCab.addEventListener('mouseout', hidden_cab)
msgCab.addEventListener('touchstart', show_cab)
msgCab.addEventListener('touchmove', show_cab)
msgCab.addEventListener('touchend', hidden_cab)
boxCab.addEventListener('mouseenter', show_cab)
boxCab.addEventListener('mouseout', hidden_cab)
boxCab.addEventListener('touchstart', show_cab)
boxCab.addEventListener('touchmove', show_cab)
boxCab.addEventListener('touchend', hidden_cab)




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

function show_lie(){
    msgLie.innerHTML = 'Não Acredite Nas Mentiras Dela'
}

function show_cab(){
    msgCab.innerHTML = 'Um Estudo Em Preto'
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

function hidden_lie(){
    msgLie.innerHTML = '...'
}

function hidden_cab(){
    msgCab.innerHTML = '...'
}

/* ------------------------------------------------------ */

/* Menu */

let menu = window.document.querySelector('menu#items')

function showMenu(){
    let icon = window.document.querySelector('span#burguer')
    
    if (menu.style.display == 'block'){
        menu.style.display = 'none'
        icon.innerHTML = 'menu'
    }else {
        menu.style.display = 'block'
        icon.innerHTML = 'menu_open'
    }
}

function keepMenu(){
    let widthScreen = window.innerWidth

    if (widthScreen >= 768){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
}





/* ------------------------------------------------------ */


