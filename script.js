//////////////////Name

document.getElementById('submit-button').addEventListener('click', function () {
    event.preventDefault()

    // clearError1()

    var name = document.getElementById('name').value.trim()

    if (name !== "") {
        document.getElementById('name')
        validName()
    } else {
        emptyError1()
        console.log('undefined name')
    }

    function validName() {
        var validDiv = document.createElement('div')
        validDiv.classList.add('input-valid')


        var field = document.getElementById('name')
        field.appendChild(validDiv)
        field.classList.add('input-valid')
    }

    function emptyError1() {
        var errorDiv = document.createElement('div')
        errorDiv.classList.add('error-message')
        errorDiv.innerText = 'This field is required'

        var field = document.getElementById('name')
        field.appendChild(errorDiv)
        field.classList.add('input-invalid')

    }


    //Car - Year, Make, Model Note: 3 event listeners

    //////Year - currently runs else statement but not if statement

    // var field = document.getElementById('car-field')

    // if (field === ""){
    //     document.getElementById('car-field')
    //     validField() 
    //     console.log('thanks')
    // } else{
    //     emptyError2()
    //     console.log('undefined car-field')
    // }



    // function validField(){
    // var validDiv = document.createElement('div')
    // validDiv.classList.add('input-valid')


    // var field = document.getElementById('car-field')
    // field.appendChild(validDiv)
    // field.classList.add('input-valid')
    // }

    // function emptyError2(){
    // var errorDiv = document.createElement('div')
    // errorDiv.classList.add('error-message')
    // errorDiv.innerText = 'This field is required'

    // var field = document.getElementById('car-field')
    // field.appendChild(errorDiv)
    // field.classList.add('input-invalid')

    // }

    /////////////////////////////Reservation Date


    var date = document.getElementById('start-date').value

    if (date !== "") {
        document.getElementById('start-date')
        validDate()
    } else {
        emptyError1()
        console.log('undefined date')
    }

    function validDate() {
        var validDiv = document.createElement('div')
        validDiv.classList.add('input-valid')


        var field = document.getElementById('start-date')
        field.appendChild(validDiv)
        field.classList.add('input-valid')
    }

    function emptyError1() {
        var errorDiv = document.createElement('div')
        errorDiv.classList.add('error-message')
        errorDiv.innerText = 'This field is required'

        var field = document.getElementById('start-date')
        field.appendChild(errorDiv)
        field.classList.add('input-invalid')

    }


    ////////////////////////Number of Days

    var day = document.getElementById('days').value
    if (day !== "") {
        validDay()
    } else {
        emptyError6()
        console.log('undefined number of days')
    }


    function validDay() {
        var validDiv = document.createElement('div')
        validDiv.classList.add('input-valid')


        var field = document.getElementById('days')
        field.appendChild(validDiv)
        field.classList.add('input-valid')
    }

    function emptyError6() {
        var errorDiv = document.createElement('div')
        errorDiv.classList.add('error-message')
        errorDiv.innerText = 'This field is required'

        var field = document.getElementById('days')
        field.appendChild(errorDiv)
        field.classList.add('input-invalid')

    }

    // /////////////////////// Credit Card

    var credit = document.getElementById('credit-card').value

    if (credit !== "") {
        document.getElementById('credit-card')
        validCredit()
    } else {
        emptyError7()
        console.log('undefined card number')
    }


    function validCredit() {
        var validDiv = document.createElement('div')
        validDiv.classList.add('input-valid')


        var field = document.getElementById('credit-card')
        field.appendChild(validDiv)
        field.classList.add('input-valid')
    }

    function emptyError7() {
        var errorDiv = document.createElement('div')
        errorDiv.classList.add('error-message')
        errorDiv.innerText = 'This field is required'

        var field = document.getElementById('credit-card')
        field.appendChild(errorDiv)
        field.classList.add('input-invalid')

    }

    /////////////////////////////CVV

    var cvv = document.getElementById('cvv').value

    if (cvv !== "") {
        document.getElementById('cvv')
        validCvv()
    } else {
        emptyError8()
        console.log('undefined cvv')
    }


    function validCvv() {
        var validDiv = document.createElement('div')
        validDiv.classList.add('input-valid')


        var field = document.getElementById('cvv')
        field.appendChild(validDiv)
        field.classList.add('input-valid')
    }

    function emptyError8() {
        var errorDiv = document.createElement('div')
        errorDiv.classList.add('error-message')
        errorDiv.innerText = 'This field is required'

        var field = document.getElementById('cvv')
        field.appendChild(errorDiv)
        field.classList.add('input-invalid')

    }

    ////////////////////////////Expiration


    var expire = document.getElementById('expiration').value
    if (expire !== "") {
        document.getElementById('expiration')
        validExpire()
    } else {
        emptyError9()
        console.log('undefined exp')
    }


    function validExpire() {
        var validDiv = document.createElement('div')
        validDiv.classList.add('input-valid')


        var field = document.getElementById('expiration')
        field.appendChild(validDiv)
        field.classList.add('input-valid')
    }

    function emptyError9() {
        var errorDiv = document.createElement('div')
        errorDiv.classList.add('error-message')
        errorDiv.innerText = 'This field is required'

        var field = document.getElementById('expiration')
        field.appendChild(errorDiv)
        field.classList.add('input-invalid')

    }

    //Clear Function

    // function clearError1() {
    //     var fields = document.getElementsByClassName('input-field').value
    //     for (var field of fields) {
    //         field.classList.remove('error-message')
    //     }
    // }

    //     var errorMessages = document.getElementsByClassName('error-message')
    //     for (errorMessage of errorMessages){
    //         errorMessage.remove()
    //     }
    })
