const removeAlertMessage = (element) => {
    if(element.parentNode.parentNode.querySelector(".alert__message")){
        let alertMessage = element.parentNode.parentNode.querySelector(".alert__message");
        alertMessage.parentNode.removeChild(alertMessage);
    }
}

export default removeAlertMessage ;