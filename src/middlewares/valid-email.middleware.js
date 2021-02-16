const emailRegexp = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const STATUS_CODE = require('../status-code');

module.exports = (request, response, next) => {
    const email = request.body.email;
    if (
        typeof email === 'string'

    ) {
        if (email.match(emailRegexp) !== null) {
            next();
        }

        else {
            response.status(401).send({
                message: STATUS_CODE.INVALID_EMAIL,
                error: STATUS_CODE.NO_ERROR,
                status: STATUS_CODE.PROCESS_ABORTED
            });
        }
    }

    else {
        response.status(401).send({
            message: STATUS_CODE.MISSING_EMAIL,
            error: STATUS_CODE.NO_ERROR,
            status: STATUS_CODE.PROCESS_ABORTED
        });
    }
}