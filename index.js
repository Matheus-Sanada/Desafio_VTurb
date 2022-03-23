let name = document.querySelector('#first_name')
let LabelName = document.querySelector('#labelfirst_name')
let validName = false

let lastName = document.querySelector('#last_name')
let LabelLastName = document.querySelector('#labellast_name')
let validLastName = false


let email = document.querySelector('#email')
let LabelEmail = document.querySelector('#labelemail')
let validEmail = false


let password = document.querySelector('#password')
let LabelPassword = document.querySelector('#labelpassword')
let validPassword = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')




name.addEventListener('keyup', () => {
    if (name.value.length <= 4) {

        name.setAttribute('style', 'color: red')
        name.setAttribute('style', 'border: 2px solid red')
        validName = false
        
       

    } else {

        name.setAttribute('style', 'color: black')
        name.setAttribute('style', 'border: 2px solid hsl(246, 25%, 77%)')
        validName = true

    }


})


lastName.addEventListener('keyup', () => {
    if (lastName.value.length <= 4) {

        lastName.setAttribute('style', 'color: red')
        lastName.setAttribute('style', 'border: 2px solid red')
        validLastName = false
       

    } else {

        lastName.setAttribute('style', 'color: black')
        lastName.setAttribute('style', 'border: 2px solid hsl(246, 25%, 77%)')
        validLastName = true

    }


})


email.addEventListener('keyup', () => {
    if (email.value.length <= 9) {

        email.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border: 2px solid red')
        validEmail = false
       

    } else {

        email.setAttribute('style', 'color: black')
        email.setAttribute('style', 'border: 2px solid hsl(246, 25%, 77%)')
        validEmail = true

    }


})


password.addEventListener('keyup', () => {
    if (password.value.length <= 7) {

        password.setAttribute('style', 'color: red')
        password.setAttribute('style', 'border: 2px solid red')
        validPassword = false
       

    } else {

        password.setAttribute('style', 'color: black')
        password.setAttribute('style', 'border: 2px solid hsl(246, 25%, 77%)')
        validPassword = true

    }


})



function cadastrar() {
    if(validName && validLastName && validEmail && validPassword) {

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Parabens! Login efetuado</strong>'
        msgError.setAttribute('style', 'display: none' )
        msgError.innerHTML = ''

        


    } else {
        msgError.setAttribute('style', 'display: block' )
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente!</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
    
}


