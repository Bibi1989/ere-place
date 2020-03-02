"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidation = (first_name, last_name, phone, is_seller, email, password) => {
    const error = {
        first_name: "",
        last_name: "",
        is_seller: "",
        phone: "",
        email: "",
        password: ""
    };
    if (first_name.trim() === "") {
        error.first_name = "First name field is empty";
    }
    if (last_name.trim() === "") {
        error.last_name = "Last name field is empty";
    }
    if (is_seller.trim() === "") {
        error.is_seller = "seller/buyer field is empty";
    }
    if (phone.trim() === "") {
        error.phone = "Phone number field is empty";
    }
    else {
        if (phone.length < 9) {
            error.phone = "Phone number is less than 9 characters";
        }
    }
    if (email.trim() === "") {
        error.email = "Email field is empty";
    }
    else {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email.match(regex)) {
            error.email = "Email is not valid";
        }
    }
    if (password.trim() === "") {
        error.password = "Password field is empty";
    }
    return error;
};
//# sourceMappingURL=validations.js.map