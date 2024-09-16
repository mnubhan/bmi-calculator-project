const alertUnfilledField = (element) => {
    if(!element.classList.contains("alert__input")){
        element.classList.add("alert__input");
        let alertMessage = document.createElement("p");
        alertMessage.classList.add("alert__message");
        alertMessage.textContent = "Please fill out this field";
        element.parentNode.parentNode.appendChild(alertMessage);
    }
} 

export { alertUnfilledField };