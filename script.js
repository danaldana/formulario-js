
let inputEmail = document.querySelector("#input-email");
let inputPass = document.querySelector("#input-passw");
let inputRepetirPass = document.querySelector("#input-repeat-passw");
let inputCheck = document.querySelector("#input-checkbox");
let inputSubmit = document.querySelector("#btn-submit");

let email, pass, repetirPass;

inputSubmit.setAttribute("disabled", "disabled");

const guardarDatos = () => {
    email = inputEmail.value;
    pass = inputPass.value;
    repetirPassword = inputRepetirPass.value;
    alert("¡Se ha registrado correctamente!");
    location.reload();
}

const validarPass = () => {
    const alertaError = document.querySelector(".error");
    if (inputPass.value === inputRepetirPass.value) {
    alertaError.style.display = "none";
    inputSubmit.removeAttribute("disabled", "disabled");
    return true;
    } else {
    alertaError.style.display = "block";
    inputSubmit.setAttribute("disabled", "disabled");
    return false;
    }
}

inputSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (validarPass()) {
        guardarDatos();
    }   
})

inputRepetirPass.addEventListener("keyup", validarPass);
