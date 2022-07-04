import { emailValidationMessage, nameValidationMessage, passwordValidationMessage } from "./constants";

export const alphaNumeric = (input) => {
    const result = /^[a-zA-Z0-9\s]{2,50}$/.test(input);
    if(result) {
        return true;
    } else {
        return nameValidationMessage;
    }
}

export const emailValid = (input) => {
    const result =/^[a-zA-Z0-9\s.@]{2,50}$/.test(input);
    if(result) {
        return true;
    } else {
        return emailValidationMessage;
    }
}

export const passwordValid = (input) => {
    const result =/^[a-zA-Z0-9\s.@]{2,50}$/.test(input);
    if(result) {
        return true;
    } else {
        return passwordValidationMessage;
    }
}