//  get element
const form = document.querySelector('#form')
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

//  show input error message
function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = "form-control error"
    const small = formControl.querySelector("small")
    small.innerText = message
}

//  show success
function showSuccess(input, message="") {
    const formControl = input.parentElement
    formControl.className = "form-control success"
    const small = formControl.querySelector("small")
    small.innerText = message
}

//  check  email  is  Valid
function isValidEmail(email) {
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4}$)/
    return re.test(String(email))
}

function checkRequired(inputArr) {
    inputArr.forEach(input=> {
        
        if(input.value.trim() === "") {
            showError(input, `${getKeyWords(input)}为必填项`)
        } else {
            showSuccess(input)
        }
    });
}

function getKeyWords(input) {
    return input.placeholder.slice(3)
}

function checkLength(input, minLen, maxLen) {
    if(input.value.length < minLen) {
        showError(input, `${getKeyWords(input)}长度不能小于${minLen}`)
    } else if(input.value.length > maxLen) {
        showError(input, `${getKeyWords(input)}长度不能大于${maxLen}`)
    } else {
        showSuccess(input);
      }
}

function checkEmail(input) {
    if(!isValidEmail(input.value)) {
        showError(input, "邮箱格式不正确")
    } 
}

function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, "密码不匹配")
    } 
}

//  event listener
form.addEventListener("submit", function(e){
    e.preventDefault()

   checkRequired([username, email, password, password2])
   checkEmail(email)
   checkLength(username, 3, 10)
   checkLength(password, 8, 20)
   checkPasswordMatch(password, password2)
  
   
})