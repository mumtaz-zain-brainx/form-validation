// Input fields 
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const contact = document.getElementById("contact");
const emails = document.getElementById("emails");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Error messages fields 
const firstNameErr = document.getElementById("firstNameErr");
const lastNameErr = document.getElementById("lastNameErr");
const ageErr = document.getElementById("ageErr");
const contactErr = document.getElementById("contactErr");
const emailsErr = document.getElementById("emailsErr");
const passwordErr = document.getElementById("passwordErr");
const confirmPasswordErr = document.getElementById("confirmPasswordErr");


// Button 
const submitBtn = document.getElementById("submitBtn");

// Values variables 
var _firstName = "";
var _lastName = "";
var _age = 0;
var _contact = 0;
var _emails = [];
var _password = "";
var _confirmPassword = "";



submitBtn.disabled = true; // Disabling submit button


// Hidding Error Messages
firstNameErr.style.display = "none"
lastNameErr.style.display = "none"
ageErr.style.display = "none"
contactErr.style.display = "none"
emailsErr.style.display = "none"
passwordErr.style.display = "none"
confirmPasswordErr.style.display = "none"




/* Adding Event Listener & creating functions */

firstName.addEventListener("focusout",checkFirstName);

function checkFirstName(){
    var val = firstName.value;
    if(val.length <= 0 || !val.trim()){
        firstNameErr.style.display = "block"
        _firstName = ""
    } else{
        firstNameErr.style.display = "none"
        _firstName = val;
    }
    enableBtn();
}


lastName.addEventListener("focusout",checklastName);

function checklastName(){
    var val = lastName.value;
    if(val.length <= 0 || !val.trim()){
        lastNameErr.style.display = "block"
        _lastName = ""
    } else{
        lastNameErr.style.display = "none"
        _lastName = val;
    }
    enableBtn();
}


age.addEventListener("focusout",checkAge);

function checkAge(){
    var val = age.value;
    if(val.length <= 0 || !val.trim()){
        ageErr.innerHTML = "Age cannot be empty."
        ageErr.style.display = "block"
        _age = 0
    } else if(val < 18 || val > 150){
        ageErr.innerHTML = "Age cannot be less than 18 or greater than 150."
        ageErr.style.display = "block"
        _age = 0
    }
    else{
        ageErr.style.display = "none"
        _age = val;
    }
    enableBtn();
}


contact.addEventListener("focusout",checkContact);

function checkContact(){
    var val = contact.value;
    if(val.length != 11){
        if(val.length == 0){
            contactErr.style.display = "none"
        } else{

            contactErr.style.display = "block"
        }
        _contact = 0
    }
    else{
        contactErr.style.display = "none"
        _contact = val;
    }
    enableBtn();
}


emails.addEventListener("focusout",checkEmails);

function checkEmails(){
    var val = emails.value;

    if(val.length == 0){
        emailsErr.innerHTML = "Notification Emails cannot be empty.";
        emailsErr.style.display = "block"
        _emails = []
    }
    else{
        const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var emailsList = [];
        emailsList= val.split(",");

        for(e of emailsList){
            if (!e.toLowerCase().match(emailRegEx)){
                emailsErr.innerHTML = "Enter valid email(s) address(s).";
                emailsErr.style.display = "block"
                _emails = [];
                return;
            }
        }
        emailsErr.style.display = "none";
        _emails = emailsList;
    }
    enableBtn();
}

password.addEventListener("focusout",checkPassword);

function checkPassword(){
    var val = password.value;

    if(val.length < 8 || !(val.match( /\d/g) && val.match(/[a-z]/g) && val.match(/[A-Z]/g)) || val.match(/\s/g)){
        if(val.length == 0){
            passwordErr.style.display = "none"
        } else {
            passwordErr.style.display = "block"
        }
        _password = ""
    }
    else{
        passwordErr.style.display = "none"
        _password = val;
        checkConfirmPassword();
    }
    enableBtn();

}


confirmPassword.addEventListener("focusout",checkConfirmPassword);

function checkConfirmPassword(){
    var val = confirmPassword.value;

    if(val != _password){
        if(val.length == 0 && _password.length == 0){
            confirmPasswordErr.style.display = "none"
        } else {
            confirmPasswordErr.style.display = "block"
        }
        _confirmPassword = ""
    }
    else{
        confirmPasswordErr.style.display = "none"
        _confirmPassword = val;
    }
    enableBtn();
}


// Enabling the button

function enableBtn(){
    if(_firstName.length > 0 && _lastName.length > 0 &&  (_age >= 18 && _age <= 150) && _emails.length > 0 && _contact.length == 11 && _password.length >=8 && _confirmPassword == _password){
        submitBtn.disabled = false;
    }else{
        submitBtn.disabled = true;
    }
}

submitBtn.addEventListener("click",print);

// Displaying Results 

function print(e){
    alert(`
        First Name: ${_firstName}
        Last Name: ${_lastName}
        Age: ${_age}
        Contact No: ${_contact}
        Notification Emails: ${_emails}
        Password: ${_password}
        Confirm Password: ${_confirmPassword}
    `)
    console.log(`
        First Name: ${_firstName}
        Last Name: ${_lastName}
        Age: ${_age}
        Contact No: ${_contact}
        Notification Emails: ${_emails}
        Password: ${_password}
        Confirm Password: ${_confirmPassword}
    `)
}
