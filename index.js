function signup(event) {
    event.preventDefault();
    let form= document.forms.register;
    let user={
        firstname: form.elements.firstname.value,
        lastname: form.elements.lastname.value,
        email: form.elements.email.value,
        password: form.elements.password.value
    }
console.log(user);
let model = document.getElementById("second_container");
model.style.display="flex"
model.classList.add("animate__animated","animate__fadeIn")
}
function closebtn(){
let secondContainer = document.getElementById("second_container");
secondContainer.style.display="none";
}