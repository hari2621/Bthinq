export default class Regex {
    static validateUserName(userName) {
        let regex_userName = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return regex_userName.test(userName);
    }
    static validatePassword(Password1) {

        let regex_password =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{9,}$/;
        return regex_password.test(Password1);
    }

}

