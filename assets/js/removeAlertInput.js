const removeAlertInput = (element) => {
    if(element.classList.contains("alert__input")){
        element.classList.remove("alert__input");
    }
}

export default removeAlertInput;