document.getElementById('parking-form').addEventListener('submit', function () {
    event.preventDefault()

    clearError1()

    var fields = document.getElementsByTagName('input')

    for (var el of fields) {
        if (el.value.trim() === "") {
            el.parentElement.classList.add('input-invalid')
            emptyError(el.parentElement)
        } else {
            el.parentElement.classList.add('input-valid')
        }
    }
})


function emptyError(el) {
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('error-message')
    errorDiv.innerText = 'This field is required'

    el.appendChild(errorDiv)
    
}

//Year

var year = document.getElementById('car-year').value

function carYear () {
    if (carYear === ""){
        emptyError(el.parentElement).add('input-invalid')
    } else {
        el.parentElement.classList.add('input-valid')
    }
}

//Make

var make = document.getElementById('car-make').value

function carMake () {
    if (carMake === ""){
        emptyError(el.parentElement).add('input-invalid')
    } else {
        el.parentElement.classList.add('input-valid')
    }
}

//Model

var make = document.getElementById('car-model').value

function carModel () {
    if (carModel === ""){
        emptyError(el.parentElement).add('input-invalid')
    } else {
        el.parentElement.classList.add('input-valid')
    }
}

//Clear Function

function clearError1() {
    var errorDivs = document.querySelectorAll('.error-message')
    for (var errorMsg of errorDivs) {
        errorMsg.remove()
    }
}