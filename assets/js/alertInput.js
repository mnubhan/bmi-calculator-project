const alertInput = element => {
    if(!element.classList.contains("alert__input")){
        element.classList.add("alert__input");
    }
}

export default alertInput;