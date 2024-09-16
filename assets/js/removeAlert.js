const removeAlert = (element) => {
    if(element.classList.contains("alert__input")){
        element.classList.remove("alert__input");
        let alertMessage = element.parentNode.parentNode.querySelector(".alert__message");
        alertMessage.parentNode.removeChild(alertMessage);
    }
}

export default removeAlert ;