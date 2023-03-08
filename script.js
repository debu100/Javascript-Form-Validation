const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

const sendData = (userNameValue, successRate, count) => {
  if (successRate === count) {
    alert("Registration Successful");
    swal("Welcome! " + userNameValue, "Registration Successful", "success");
    // location.href = `demo.html?username=${userNameValue}`;
  }
};

// final data validation

const successmsg = (userNameValue) => {
  let formCon = document.getElementsByClassName("form-control");
  var count = formCon.length - 1;
  for (var i = 0; i < formCon.length; i++) {
    if (formCon[i].className === "form-control success") {
      var successRate = 0 + i;
      console.log(successRate);
      sendData(userNameValue, successRate, count);
    } else {
      return false;
    }
  }
};

// more email validation

const isEmail = (emailValue) => {
  var atSymbol = emailValue.indexOf("@");

  if (atSymbol < 1) {
    return false;
  }

  var dot = emailValue.lastIndexOf(".");

  if (dot <= atSymbol + 2) {
    return false;
  }

  if (dot === emailValue.length - 1) {
    return false;
  }

  return true;
};

// validate function

const validate = () => {
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const phoneValue = phone.value.trim();
  const cpasswordValue = cpassword.value.trim();

  // validate username

  if (userNameValue === "") {
    setErrormsg(userName, "Username can't be blank");
  } else if (userNameValue.length <= 2) {
    setErrormsg(userName, "Atleast 3 characters");
  } else {
    setSuccessmsg(userName);
  }

  // validate email

  if (emailValue === "") {
    setErrormsg(email, "Email can't be blank");
  } else if (!isEmail(emailValue)) {
    setErrormsg(email, "Not a valid Email");
  } else {
    setSuccessmsg(email);
  }

  // validate phone

  if (phoneValue === "") {
    setErrormsg(phone, "Number can't be blank");
  } else if (phoneValue.length != 10) {
    setErrormsg(phone, "Not a valid number");
  } else {
    setSuccessmsg(phone);
  }

  // validate password

  if (passwordValue === "") {
    setErrormsg(password, "Password can't be blank");
  } else if (passwordValue.length <= 7) {
    setErrormsg(password, "Atleast 8 characters");
  } else {
    setSuccessmsg(password);
  }

  // validate cpassword

  if (cpasswordValue === "") {
    setErrormsg(cpassword, "Password must match");
  } else if (cpasswordValue !== passwordValue) {
    setErrormsg(cpassword, "Password must match");
  } else {
    setSuccessmsg(cpassword);
  }

  successmsg(userNameValue);
};

function setErrormsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessmsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
