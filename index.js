const theme = document.querySelector('#themeSwitcher');
const container = document.querySelector('.container');
const body = document.querySelector('body');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const result = document.getElementById('result');

theme.addEventListener('click', function () {
    const body = document.querySelector('body')

    body.classList.toggle('whiteTheme')
})

document.querySelectorAll('.charKey').forEach(function (charKeyBttn) {
    charKeyBttn.addEventListener('click', function () {
        const value = charKeyBttn.dataset.value
        input.value += value
    })
})

body.addEventListener('click', function () {
    input.focus()
})

document.getElementById('clear').addEventListener('click', clear)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyToClipboard').addEventListener('click', function (event){
const button = event.currentTarget
if(button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('sucess')
    navigator.clipboard.writeText(result.value)
} else {
    button.innerText = 'Copy'
    button.classList.remove('sucess')
}
})

const allowedKeys = ["(", ")", "/", "7", "8", "9", "*", "4", "6", "5", "-", "1", "2", "3", "+", "0", ".", "%"]

input.addEventListener('keydown', function (event) {
    event.preventDefault()
    if (allowedKeys.includes(event.key)) {
        input.value += event.key
        return
    }
    if (event.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
    if (event.key === 'Enter') {
        calculate()
    }
    if (event.key === 'Escape') {
        clear()
    }
})

function calculate() {
    result.value = 'ERROR'
    result.classList.add('error')

    const results = eval(input.value)
    result.value = results
    result.classList.remove('error')
}
function clear() {
    input.value = null
    input.focus()
}
