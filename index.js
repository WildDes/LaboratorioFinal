//const inputs = document.querySelectorAll('.form-group #formulario input');
const formulario = document.querySelector('form');
const inputs = formulario.querySelectorAll('input');

function validar() {
  var nombre = document.getElementById("nombre").value;
  var apellido1 = document.getElementById("apellido1").value;
  var apellido2 = document.getElementById("apellido2").value;
  var email = document.getElementById("email").value;
  var login = document.getElementById("login").value;
  var password = document.getElementById("password").value;

  var errorN = document.getElementById("errorN");
  var errorA1 = document.getElementById("errorA1");
  var errorA2 = document.getElementById("errorA2");
  var errorE = document.getElementById("errorE");
  var errorL = document.getElementById("errorL");
  var errorP = document.getElementById("errorP");

  var input = document.getElementById("nombre");
  var inputA1 = document.getElementById("apellido1");
  var inputA2 = document.getElementById("apellido2");
  var inputE = document.getElementById("email");
  var inputL = document.getElementById("login");
  var inputP = document.getElementById("password");

  validateNameApellido(input, errorN, nombre);
  validateNameApellido(inputA1, errorA1, apellido1);
  validateNameApellido(inputA2, errorA2, apellido2);
  validateEmail(inputE, errorE, email);
  validateLogin(inputL,errorL, login);
  validatePassword1(inputP, errorP, password);
}

function validateEmailType(email) {
  var exprReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return exprReg.test(email);
}

function validatePassword(password) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
}

function invalidateInput(input, error, errorMessage) {
  error.textContent = errorMessage;
  error.classList.add("error");
  input.classList.remove("input-valid");
  input.classList.add("input-invalid");
  input.style.display = "inline-block";
}

function validateInput(input, error, errorMessage) {
  error.textContent = errorMessage;
  error.classList.remove("error");
  input.classList.remove("input-invalid");
  input.classList.add("input-valid");
  input.style.display = "inline-block";
}

function validateNameApellido(input, error, nombre) {
  if (nombre === "") {
    invalidateInput(input, error, "Rellene este campo");
  } else if (!isNaN(nombre) || /\d/.test(nombre)) {
    invalidateInput(input, error, "El nombre/apellidos solo puede contener caracteres alfabéticos");
  } else {
    validateInput(input, error, " ");
  }
}

function validateEmail(input, error, email) {
  if (email === "") {
    invalidateInput(input, error, "Rellene este campo");
  } else if (!validateEmailType(input.value)) {
    invalidateInput(input, error, "Email inválido");
  } else {
    validateInput(input, error, " ");
  }
}
function validateLogin(input, error, login){
    if (login===""){
        invalidateInput(input, error, "Rellene este campo");
    }else{
        validateInput(input, error, "");
    }
}

function validatePassword1(input, error, password) {
  if (password === "") {
    invalidateInput(input, error, "Rellene este campo");
  } else if (!validatePassword(input.value)) {
    invalidateInput(input, error, "Debe tener más de 8 caracteres");
  } else {
    validateInput(input, error, " ");
  }
}

const validarFormulario = (e) => {
    switch (e.target.name) {
      case "nombre":
        var errorN = document.getElementById("errorN");
        var inputNombre = document.getElementById("nombre");
        var valorNombre = inputNombre.value;
        validateNameApellido(inputNombre, errorN, valorNombre);
        break;
      case "apellido1":
        var errorA1 = document.getElementById("errorA1");
        var inputApellido1 = document.getElementById("apellido1");
        var valorApellido1 = inputApellido1.value;
        validateNameApellido(inputApellido1, errorA1, valorApellido1);
        break;
      case "apellido2":
        var errorA2 = document.getElementById("errorA2");
        var inputApellido2 = document.getElementById("apellido2");
        var valorApellido2 = inputApellido2.value;
        validateNameApellido(inputApellido2, errorA2, valorApellido2);
        break;
      case "email":
        var errorE = document.getElementById("errorE");
        var inputEmail = document.getElementById("email");
        var valorEmail = inputEmail.value;
        validateEmail(inputEmail, errorE, valorEmail);
        break;
      case "login":
        var errorL = document.getElementById("errorL");
        var inputLogin = document.getElementById("login");
        var valorLogin = inputLogin.value;
        validateLogin(inputLogin, errorL, valorLogin);
        break;
      case "password":
        var errorP = document.getElementById("errorP");
        var inputPassword = document.getElementById("password");
        var valorPassword = inputPassword.value;
        validatePassword1(inputPassword, errorP, valorPassword);
        break;
    }
  }
  
inputs.forEach((input) => {
  input.addEventListener("blur", validarFormulario);
  input.addEventListener("keyup", validarFormulario);
});

