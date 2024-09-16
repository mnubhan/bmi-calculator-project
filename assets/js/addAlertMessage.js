const addAlertMessage = (element) => {
    if(!element.querySelector(".alert__message")){
        let alertMessage = document.createElement("p");
        alertMessage.classList.add("alert__message");
        alertMessage.textContent = "Please fill out this field";
        element.appendChild(alertMessage);
    }
} 

export { addAlertMessage };