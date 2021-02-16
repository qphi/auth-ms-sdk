module.exports = {
    STATUS_CODE: require('./src/status-code'),

    ExpiredTokenException: require('./src/exceptions/ExpiredToken.exception'),
    TokenShouldBeRefreshedException: require('./src/exceptions/TokenShouldBeRefreshed.exception'),
    InvalidTokenException: require('./src/exceptions/InvalidToken.exception'),
    MissingIdentityTokenException: require('./src/exceptions/MissingIdentityToken.exception'),
    MissingRefreshTokenException: require('./src/exceptions/MissingRefreshToken.exception'),

    ConfirmPassword: require('./src/middlewares/confirm-password.middleware'),
    HasPassword: require('./src/middlewares/has-password.middleware'),
    Password8LengthMin: require('./src/middlewares/password-8-length-min.middleware'),
    ValidEmail: require('./src/middlewares/valid-email.middleware')
};