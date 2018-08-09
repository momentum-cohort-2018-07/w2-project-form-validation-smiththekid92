//Name

document.getElementById('submit-button').addEventListener('click', function(){
    event.preventDefault()

    clearError1()

    var name = document.getElementById('name').value.trim()

    if (name !== ""){
        document.getElementById('name')
        validName() 
    } else{
        emptyError1()
    }
        
})

function validName(){
    var validDiv = document.createElement('div')
    validDiv.classList.add('input-valid')


    var field = document.getElementById('name-field')
    field.appendChild(validDiv)
    field.classList.add('input-valid')
}

function emptyError1(){
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('error-message')
    errorDiv.innerText = 'This field is required'

    var field = document.getElementById('name-field')
    field.appendChild(errorDiv)
    field.classList.add('input-invalid')

}

function clearError1() {
    var fields = document.getElementsByClassName('input-field')
    for (var field of fields){
        field.classList.remove('error-message')
    }


    var errorMessage = document.getElementsByClassName('error-message')[0]
    // var errorMessage = field.querySelectorAll('.input-field')
    console.log(errorMessage)
    if (errorMessage) {
      errorMessage.remove()
    }
  }

//Car - Year, Make, Model Note: 3 event listeners

//Reservation Date

//Number of Days

// Credit Card

//CVV

//Expiration