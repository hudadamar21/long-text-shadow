// View Shadow
const text = document.getElementById('text');
const body = document.querySelector('#body');
const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.toggle');
const textMax = document.querySelector('.textMax');

toggle.addEventListener('click', function() {
    sidebar.classList.toggle('geser');
    if (!sidebar.classList.contains('geser')) {
        toggle.style.opacity = '100%'
        toggle.textContent = 'X';
    } else {
        toggle.textContent = '>';
        toggle.style.boxShadow = '0px 0px 00px rgba(0, 0, 0, 0)'
        toggle.style.opacity = '20%'
    }

});


let shadow = '';
for (let i = 0; i < 500; i++) {
    shadow += (shadow ? ',' : '') + i * 1 + 'px ' + i * 1 + 'px ' + ' 0px #ff9900';
}
text.style.textShadow = shadow;

// Change Color
function setTextColor(textColor) {
    text.style.color = '#' + textColor.toString()
}

function setBgColor(bgColor) {
    body.style.backgroundColor = '#' + bgColor.toString()
}

function setShadowColor(shadowColor) {
    const text = document.getElementById('text');
    let shadow = '';
    for (let i = 0; i < 500; i++) {
        shadow += (shadow ? ',' : '') + i * 1 + 'px ' + i * 1 + 'px ' + ' 0px' + '#' + shadowColor;
    }
    text.style.textShadow = shadow;
}

input = document.querySelector('#text');

const setMaxLenght = 201;
textMax.textContent = setMaxLenght;

settings = {
    maxLen: setMaxLenght,
}

keys = {
    'backspace': 8,
    'shift': 16,
    'ctrl': 17,
    'alt': 18,
    'delete': 46,
    // 'cmd':
    'leftArrow': 37,
    'upArrow': 38,
    'rightArrow': 39,
    'downArrow': 40,
}

utils = {
    special: {},
    navigational: {},
    isSpecial(e) {
        return typeof this.special[e.keyCode] !== 'undefined';
    },
    isNavigational(e) {
        return typeof this.navigational[e.keyCode] !== 'undefined';
    }
}

utils.special[keys['backspace']] = true;
utils.special[keys['shift']] = true;
utils.special[keys['ctrl']] = true;
utils.special[keys['alt']] = true;
utils.special[keys['delete']] = true;

utils.navigational[keys['upArrow']] = true;
utils.navigational[keys['downArrow']] = true;
utils.navigational[keys['leftArrow']] = true;
utils.navigational[keys['rightArrow']] = true;

input.addEventListener('keydown', function(event) {
    let len = event.target.innerText.trim().length;
    hasSelection = false;
    selection = window.getSelection();
    isSpecial = utils.isSpecial(event);
    isNavigational = utils.isNavigational(event);

    if (selection) {
        hasSelection = !!selection.toString();
    }

    if (isSpecial || isNavigational) {
        return true;
    }

    if (len >= settings.maxLen && !hasSelection) {
        event.preventDefault();
        return false;
    }

});