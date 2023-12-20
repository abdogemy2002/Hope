// Start blog
var x1 = document.getElementById("blogone");
var y1 = document.getElementById("blogtwo");
var z1 = document.getElementById("blogthree");
document.querySelector(".blogbt1").onclick = function () {
  if (x1.style.display == "block") {
    document.getElementById("blogone").style.display = "none";
    document.querySelector(".blogbt1").innerHTML = "read more";
  } else {
    document.getElementById("blogone").style.display = "block";
    document.querySelector(".blogbt1").innerHTML = " read less ";
  }
};
document.querySelector(".blogbt2").onclick = function () {
  if (y1.style.display == "block") {
    document.getElementById("blogtwo").style.display = "none";
    document.querySelector(".blogbt2").innerHTML = "read more";
  } else {
    document.getElementById("blogtwo").style.display = "block";
    document.querySelector(".blogbt2").innerHTML = "read less";
  }
};
document.querySelector(".blogbt3").onclick = function () {
  if (z1.style.display == "block") {
    document.getElementById("blogthree").style.display = "none";
    document.querySelector(".blogbt3").innerHTML = "read more";
  } else {
    document.getElementById("blogthree").style.display = "block";
    document.querySelector(".blogbt3").innerHTML = "read less";
  }
};
// End blog



// Start Testimonials
document.querySelector(".testbt1").onclick = function () {
  document.getElementById("rem1").style.display = "none";
  document.getElementById("rem2").style.display = "none";
  document.getElementById("rem3").style.display = "flex";
  document.querySelector(".testbt2").classList.remove("test-active");
  document.querySelector(".testbt3").classList.remove("test-active");
  document.querySelector(".testbt1").classList.add("test-active");
};
document.querySelector(".testbt2").onclick = function () {
  document.getElementById("rem1").style.display = "none";
  document.getElementById("rem3").style.display = "none";
  document.getElementById("rem2").style.display = "flex";
  document.querySelector(".testbt1").classList.remove("test-active");
  document.querySelector(".testbt3").classList.remove("test-active");
  document.querySelector(".testbt2").classList.add("test-active");
};
document.querySelector(".testbt3").onclick = function () {
  document.getElementById("rem2").style.display = "none";
  document.getElementById("rem3").style.display = "none";
  document.getElementById("rem1").style.display = "flex";
  document.querySelector(".testbt1").classList.remove("test-active");
  document.querySelector(".testbt2").classList.remove("test-active");
  document.querySelector(".testbt3").classList.add("test-active");
};
// End Testimonials

// // form validation "donation" =====//
const form = document.getElementById("form");
const Fname = document.getElementById("Fname");
const Lname = document.getElementById("Lname");
const Email = document.getElementById("Email");
const city = document.getElementById("city");
const state = document.getElementById("state");
const street = document.getElementById("street");
const Postal = document.getElementById("Postal");
const mobile = document.getElementById("mobile");
const Amount = document.getElementsByName("Amount");
const Type = document.getElementsByName("Type");
const email_updates = document.getElementsByName("get-email-updates");
const hope4all_messages = document.getElementsByName("get-hope4all-messages");
const robot = document.getElementsByName("robot");

form.addEventListener("submit", (e) => {
  if (validateInputs() == false) {
    e.preventDefault();
  }
});
//================================//

// form validation "Contact" =====//
const form2 = document.getElementById("form2");
const Name = document.getElementById("Name");
const Email2 = document.getElementById("Email2");
const message = document.getElementById("message");

form2.addEventListener("submit", (e) => {
  if (validateInputs2() == false) {
    e.preventDefault();
  }
});
//================================//

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  const successDisplayspan = inputControl.querySelector(".error + span");

  successDisplayspan.innerText = "";
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  const successDisplayspan = inputControl.querySelector(".error + span");

  errorDisplay.innerText = "";
  successDisplayspan.innerText = message;
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const FnameValue = Fname.value.trim();
  const LnameValue = Lname.value.trim();
  const EmailValue = Email.value.trim();
  const cityValue = city.value.trim();
  const stateValue = state.value.trim();
  const streetValue = street.value.trim();
  const PostalValue = Postal.value.trim();
  const mobileValue = mobile.value.trim();
  const cardValue = card.value.trim();
  var tamam = 0;

  //Fname
  if (FnameValue === "") {
    setError(Fname, "First name is required");
  } else if (/[^a-zA-Z_]/.test(FnameValue)) {
    setError(Fname, "First name can only contain alphanumeric characters & _");
  } else if (FnameValue.length > 15 || FnameValue.length < 3) {
    setError(Fname, "First name must be between 3 to 15 characters");
  } else {
    setSuccess(Fname, "Name Is Valid");
    tamam++;
  }
  //Lname
  if (LnameValue === "") {
    setError(Lname, "Last name is required");
  } else if (/[^a-zA-Z_]/.test(LnameValue)) {
    setError(Lname, "Last name can only contain alphanumeric characters & _");
  } else if (LnameValue.length > 15 || LnameValue.length < 3) {
    setError(Lname, "Last name must be between 3 to 15  characters");
  } else {
    setSuccess(Lname, "Name Is Valid");
    tamam++;
  }

  //Email
  if (EmailValue === "") {
    setError(Email, "Email is required");
  } else if (!isValidEmail(EmailValue)) {
    setError(Email, "Provide a valid email address");
  } else {
    setSuccess(Email, "Email Is Valid");
    tamam++;
  }

  //City
  if (cityValue === "") {
    setError(city, "city name is required");
  } else if (/[^a-zA-Z_]/.test(cityValue)) {
    setError(city, "city name can only contain alphanumeric characters & _");
  } else if (cityValue.length > 20 || cityValue.length < 3) {
    setError(city, "city name must be between 3 to 20  characters");
  } else {
    setSuccess(city, "City name Is Valid");
    tamam++;
  }

  //State
  if (stateValue === "") {
    setError(state, "state name is required");
  } else if (/[^a-zA-Z_]/.test(stateValue)) {
    setError(state, "state name can only contain alphanumeric characters & _");
  } else if (stateValue.length > 20 || stateValue.length < 3) {
    setError(state, "state name must be between 3 to 20  characters");
  } else {
    setSuccess(state, "State name Is Valid");
    tamam++;
  }

  //street
  if (streetValue === "") {
    setSuccess(street, "can be empty");
  } else if (/[^a-zA-Z_]/.test(streetValue)) {
    setError(
      street,
      "street name can only contain alphanumeric characters & _"
    );
  } else if (streetValue.length > 20 || streetValue.length < 3) {
    setError(street, "street name must be between 3 to 20 characters");
  } else {
    setSuccess(street, "Street name Is Valid");
  }

  //Postal
  if (PostalValue === "") {
    setSuccess(Postal, "can be empty");
  } else if (/[^0-9]/.test(PostalValue)) {
    setError(Postal, "Postal Number can only contain Numbers");
  } else if (PostalValue.length < 5 || PostalValue.length > 10) {
    setError(Postal, "Postal Number must be between 5 to 10 digits");
  } else {
    setSuccess(Postal, "Postal Number Is Valid");
  }

  //mobile
  if (mobileValue === "") {
    setError(mobile, "Mobile Number is required");
  } else if (/[^0-9]/.test(mobileValue)) {
    setError(mobile, "Mobile Number can only contain Numbers");
  } else if (mobileValue.length !== 11) {
    setError(mobile, "Mobile Number must be 11 digits");
  } else {
    setSuccess(mobile, "Mobile Number Is Valid");
    tamam++;
  }

  //card
  if (cardValue === "") {
    setSuccess(card, "can be empty");
  } else if (/[^0-9]/.test(cardValue)) {
    setError(card, "Card Number can only contain Numbers");
  } else if (cardValue.length < 8 || cardValue.length > 19) {
    setError(card, "Card Number must be between 8 to 19 digits");
  } else {
    setSuccess(card, "Card Number Is Valid");
  }

  //radio amount
  var amoutVaild = false;
  for (var i = 0; i < Amount.length; i++) {
    if (Amount[i].checked) {
      amoutVaild = true;
      break;
    }
  }
  if (amoutVaild == false) {
    setError(Amount[0], "You mast select one");
  } else {
    setSuccess(Amount[0], "Selection done");
    tamam++;
  }

  //radio Type
  var typeVaild = false;
  for (var i = 0; i < Type.length; i++) {
    if (Type[i].checked) {
      typeVaild = true;
      break;
    }
  }
  if (typeVaild == false) {
    setError(Type[0], "You mast select one");
  } else {
    setSuccess(Type[0], "Selection done");
    tamam++;
  }

  //radio email_updates
  var email_updates_Vaild = false;
  for (var i = 0; i < email_updates.length; i++) {
    if (email_updates[i].checked) {
      email_updates_Vaild = true;
      break;
    }
  }
  if (email_updates_Vaild == false) {
    setError(email_updates[0], "You mast select one");
  } else {
    setSuccess(email_updates[0], "Selection done");
    tamam++;
  }
  //hope4all_messages Type
  var hope4all_messagesVaild = false;
  for (var i = 0; i < hope4all_messages.length; i++) {
    if (hope4all_messages[i].checked) {
      hope4all_messagesVaild = true;
      break;
    }
  }
  if (hope4all_messagesVaild == false) {
    setSuccess(hope4all_messages[0], "can be empty");
  } else {
    setSuccess(hope4all_messages[0], "Selection done");
  }
  //robot

  if (!robot[0].checked) {
    setError(robot[0].parentElement, "must be checked");
  } else {
    setSuccess(robot[0].parentElement, "Selection done");
    tamam++;
  }

  if (tamam < 10) {
    return false;
  } else {
    return true;
  }
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
};

const validateInputs2 = () => {
  const NameValue = Name.value.trim();
  const Email2Value = Email2.value.trim();
  const messageValue = message.value.trim();
  var tamam = 0;
  //Name
  if (NameValue === "") {
    setError(Name, "Name is required");
  } else if (/[^a-zA-Z_]/.test(NameValue)) {
    setError(Name, "Name can only contain alphanumeric  & _");
  } else if (NameValue.length > 25 || NameValue.length < 3) {
    setError(Name, "Name must be between 3 to 25  characters");
  } else {
    setSuccess(Name, "Name Is Valid");
    tamam++;
  }

  //Email2
  if (Email2Value === "") {
    setError(Email2, "Email is required");
  } else if (!isValidEmail(Email2Value)) {
    setError(Email2, "Provide a valid email address");
  } else {
    setSuccess(Email2, "Email Is Valid");
    tamam++;
  }

  //Message
  if (messageValue === "") {
    setError(message, "message can't be empty");
  } else if (messageValue.length > 200 || messageValue.length < 4) {
    setError(message, "message must be between 4 to 200  characters");
  } else {
    setSuccess(message, "message Is Valid");
    tamam++;
  }
  if (tamam === 3) {
    return true;
  } else {
    return false;
  }
};

window.addEventListener("scroll", function () {
  var icon = document.getElementById("medhat");
  if (window.pageYOffset > 50) {
    icon.style.display = "block";
  } else {
    icon.style.display = "none";
  }
});

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
