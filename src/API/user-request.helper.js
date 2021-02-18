class UserRequestHelper {
    getEmail(request) {
        return request.user.email;
    }

    getPassword(request) {
        return request.user.password;
    }

    getConfirmPassword(request) {
        return request.user.confirmPassword;
    }
}

module.exports = UserRequestHelper;

