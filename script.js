//Name

document.getElementById('submit-button').addEventListener('submit', function(){
    event.preventDefault()

    var name = document.getElementById('name-field').value.trim()

    if (name !== ""){
        // document.getElementById('name').innerText = 'Proceed to next step'
        validName()
    } else {
        emptyError1()
    }
})

function validName(){
    var validDiv = document.createElement('div')
    validDiv.classList.add('input-valid')
    validDiv.innerText = 'Proceed to next step'

    var field = document.getElementById('name-field')
    field.appendChild(validDiv)
    field.classList.add('valid')
}

function emptyError1(errorDiv){
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('input-invalid')
    errorDiv.innerText = 'This field is required'

    var field = document.getElementById('name-field')
    field.appendChild(errorDiv)
    field.classList.add('error')

}

//Car - Year, Make, Model Note: 3 event listeners needed!

//Reservation Date

//Number of Days

// Credit Card

//CVV

//Expiration