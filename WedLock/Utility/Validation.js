export default class Regex {
    //UserName Validation
    static validateUserName(userName) {
        let regex_userName = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,10}$/;
        return regex_userName.test(userName);
    }
    //Password Validation
    static validatePassword(Password1) {
        let regex_password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return regex_password.test(Password1);
    }

    //Forgot validation
    static validateEmail(validEmail) {
        let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(String(validEmail));
    }


}


