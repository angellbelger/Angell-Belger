
var msgMind = window.document.querySelector('p#mind')
var msgDark = window.document.querySelector('p#dark')

msgMind.addEventListener('mouseenter', show_mind)
msgMind.addEventListener('mouseout', hidden_mind)



msgDark.addEventListener('mouseenter', show_dark)
msgDark.addEventListener('mouseout', hidden_dark)



function show_mind(){
    msgMind.innerHTML = 'Palácio Mental'
}

function show_dark(){
    msgDark.innerHTML = 'Dia Sombrio'
}

function hidden_mind(){
    msgMind.innerHTML = '...'
}

function hidden_dark(){
    msgDark.innerHTML = '...'
}