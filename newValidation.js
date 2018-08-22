/*

Grace Kelly
8.6.18
form validation code for snoot.html
snoot.js

*/

//=====================================
//GLOBAL VARIABLES/ SET UPS
//=====================================

"use strict";

var formValidity = true; 


//----------------
// EVENT LISTENER
//----------------

//event listeners, calls function setUpPage on page load
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvents("onload", setUpPage);
     
}

function createEventListeners() {
    var submitButtonElement = document.getElementById("submitButton");
        if (submitButtonElement.addEventListener) {
            submitButtonElement.addEventListener("submit", validateForm, false);
        } else if (submitButtonElement.attachEvent) {
            submitButtonElement.attachEvents("onsubmit", validateForm);
        }   
}
    
//----------------
//CALLS FUNCTIONS
//----------------

//setUpPage is called by first event listener if statement on page load
function setUpPage() {
    removeSelectDefaults();
    createEventListeners();
}
    
function validateForm() {
    if (evt.preventDefault) {
            evt.preventDefault();
        }
        else {
            evt.returnValue = false;
        }
        formValidity = true;
    
        validateEmail();
    
        if (formValidity === true) { //form is valid
            document.getElementById("errorEmail").innerHTML = "";
            document.getElementById("errorEmail").style.display = "none";
            document.getElementsByTagName("form")[0].submit();

        }
        else {
            document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit your order.";
            document.getElementById("errorText").style.display = "block";
            scroll(0,0);
        }
    }

//=====================================
//VALIDATION
//=====================================

// function to remove select list defaults
function removeSelectDefaults() {
    var emptyBoxes  = document.getElementsByTagName("select");
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}

// function that validates email and password is entered
    

function validateEmail() {
    var errorDiv = document.getElementById("errorEmail");
    var emailElement = document.getElementById("exampleInputEmail1");
    //var passwordElement = document.getElementById("exampleInputPassword1");
    var invColor = "rgb(255,233,233)";
    var fieldsetValidity = true;
    var formValidity = true;
    emailElement.style.background = "white";
    //passwordElement.style.background = "white";
    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";

    
    try {
        //if there's input in the email
        if (emailElement.value !== "" && emailElement.value !== emailElement.placeholder) { 
                fieldsetValidity = true;
            }
        else (emailElement.value === "") {
            fieldsetValidity = false;
            throw("Please enter an email.");
        }
    } 
      catch {
        alert("i am here");
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "Please enter an email.";
        emailElement.style.background = invColor;
        //passwordElement.style.background = invColor;
        formValidity = false;

      }

}
    

    
  
    
    
    
    
    
    
    
    
