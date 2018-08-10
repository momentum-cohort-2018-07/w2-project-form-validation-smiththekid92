//////////////////Name

document.getElementById('submit-button').addEventListener('click', function(){
    event.preventDefault()

    clearError1()

//     var name = document.getElementById('name').value.trim()

//     if (name !== ""){
//         document.getElementById('name')
//         validName() 
//     } else{
//         emptyError1()
//         console.log('undefined name')
//     }
        
// })

// function validName(){
//     var validDiv = document.createElement('div')
//     validDiv.classList.add('input-valid')


//     var field = document.getElementById('name-field')
//     field.appendChild(validDiv)
//     field.classList.add('input-valid')
// }

// function emptyError1(){
//     var errorDiv = document.createElement('div')
//     errorDiv.classList.add('error-message')
//     errorDiv.innerText = 'This field is required'

//     var field = document.getElementById('name-field')
//     field.appendChild(errorDiv)
//     field.classList.add('input-invalid')

// }


//Car - Year, Make, Model Note: 3 event listeners

//////Year
var year = document.getElementById('car-year').value.trim()

if (year !== ""){
    document.getElementById('car-year')
    validYear() 
} else{
    emptyError1()
    console.log('undefined car-year')
}
    
})

function validYear(){
var validDiv = document.createElement('div')
validDiv.classList.add('input-valid')


var field = document.getElementById('car-year-field')
field.appendChild(validDiv)
field.classList.add('input-valid')
}

function emptyError1(){
var errorDiv = document.createElement('div')
errorDiv.classList.add('error-message')
errorDiv.innerText = 'This field is required'

var field = document.getElementById('car-year-field')
field.appendChild(errorDiv)
field.classList.add('input-invalid')

}

/////////////////////////////Reservation Date


// var date = document.getElementById('start-date-field')

//     if (date !== ""){
//         document.getElementById('start-date-field')
//         validDate() 
//     } else{
//         emptyError1()
//         console.log('undefined date')
//     }
        

// function validDate(){
//     var validDiv = document.createElement('div')
//     validDiv.classList.add('input-valid')


//     var field = document.getElementById('start-date-feild')
//     field.appendChild(validDiv)
//     field.classList.add('input-valid')
// }

// function emptyError1(){
//     var errorDiv = document.createElement('div')
//     errorDiv.classList.add('error-message')
//     errorDiv.innerText = 'This field is required'

//     var field = document.getElementById('start-date-field')
//     field.appendChild(errorDiv)
//     field.classList.add('input-invalid')

// }


////////////////////////Number of Days

// var day = document.getElementById('days-field')

//     if (day !== ""){
//         document.getElementById('days-field')
//         validDay() 
//     } else{
//         emptyError1()
//         console.log('undefined number of days')
//     }
        

// function validDay(){
//     var validDiv = document.createElement('div')
//     validDiv.classList.add('input-valid')


//     var field = document.getElementById('days-feild')
//     field.appendChild(validDiv)
//     field.classList.add('input-valid')
// }

// function emptyError1(){
//     var errorDiv = document.createElement('div')
//     errorDiv.classList.add('error-message')
//     errorDiv.innerText = 'This field is required'

//     var field = document.getElementById('days-field')
//     field.appendChild(errorDiv)
//     field.classList.add('input-invalid')

// }

/////////////////////// Credit Card

// var credit = document.getElementById('credit-card-field')

//     if (credit !== ""){
//         document.getElementById('credit-card-field')
//         validCredit() 
//     } else{
//         emptyError1()
//         console.log('undefined card number')
//     }
        

// function validCredit(){
//     var validDiv = document.createElement('div')
//     validDiv.classList.add('input-valid')


//     var field = document.getElementById('credit-card-feild')
//     field.appendChild(validDiv)
//     field.classList.add('input-valid')
// }

// function emptyError1(){
//     var errorDiv = document.createElement('div')
//     errorDiv.classList.add('error-message')
//     errorDiv.innerText = 'This field is required'

//     var field = document.getElementById('credit-card-field')
//     field.appendChild(errorDiv)
//     field.classList.add('input-invalid')

// }

/////////////////////////////CVV

// var cvv = document.getElementById('cvv-field')

//     if (cvv !== ""){
//         document.getElementById('cvv-field')
//         validCvv() 
//     } else{
//         emptyError1()
//         console.log('undefined cvv')
//     }
        

// function validCvv(){
//     var validDiv = document.createElement('div')
//     validDiv.classList.add('input-valid')


//     var field = document.getElementById('cvv-feild')
//     field.appendChild(validDiv)
//     field.classList.add('input-valid')
// }

// function emptyError1(){
//     var errorDiv = document.createElement('div')
//     errorDiv.classList.add('error-message')
//     errorDiv.innerText = 'This field is required'

//     var field = document.getElementById('cvv-field')
//     field.appendChild(errorDiv)
//     field.classList.add('input-invalid')

}

////////////////////////////Expiration


// var expire = document.getElementById('expiration-field')

//     if (cvv !== ""){
//         document.getElementById('expiration-field')
//         validExpire() 
//     } else{
//         emptyError1()
//         console.log('undefined exp')
//     }
        

// function validExpire(){
//     var validDiv = document.createElement('div')
//     validDiv.classList.add('input-valid')


//     var field = document.getElementById('expiration-feild')
//     field.appendChild(validDiv)
//     field.classList.add('input-valid')
// }

// function emptyError1(){
//     var errorDiv = document.createElement('div')
//     errorDiv.classList.add('error-message')
//     errorDiv.innerText = 'This field is required'

//     var field = document.getElementById('expiration-field')
//     field.appendChild(errorDiv)
//     field.classList.add('input-invalid')

// }

//Clear Function

function clearError1() {
    var fields = document.getElementsByClassName('input-field')
    for (var field of fields){
        field.classList.remove('error-message')
    }

    var errorMessage = document.getElementsByClassName('error-message')[0]
    if (errorMessage) {
      errorMessage.remove()
    }
  }