
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var password = document.contactForm.password.value;
    var age = document.contactForm.age.value;
    var gender = document.contactForm.gender.value;
    var date = document.contactForm.date.value;

    var nameErr = emailErr = mobileErr = passwordErr = ageErr = dateErr = genderErr = true;


    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    if (password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        if (password.length < 6) {
            printError("passwordErr", "Please enter a password of lenght greater than six!");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

    if (age == "") {
        printError("ageErr", "Please enter your age");
    } else {
        printError("ageErr", "");
        ageErr = false;
    }

    if (date == "") {
        printError("ageErr", "Please enter date");
    } else {
        printError("dateErr", "");
        dateErr = false;
    }

    if (gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    if ((nameErr || emailErr || mobileErr || passwordErr || ageErr || dateErr || genderErr) == true) {
        return false;
    } else {
        return true
    }
};