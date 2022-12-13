import { REGEX } from "./Constants";
export default class Regex {
    //UserName Validation
    static validateUserName(userName) {
        let regex_userName = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,10}$/;
        return regex_userName.test(userName);
    }
    //Password Validation
    static validatePassword(Password) {
        let regex_password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return regex_password.test(Password);
    }
    //Forgot validation
    static validateEmail_Forgot(validEmail) {
        let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(validEmail);
    }
    //Email Validation
    static validateEmail(email) {
        let regex_email = REGEX.EMAIL;
        return regex_email.test(String(email));
    }
    //Number Validation
    static validateNumber(mobnumber) {
        let regex_mob = REGEX.NUMBER;
        return regex_mob.test(mobnumber);
    }
}


