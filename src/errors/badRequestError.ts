import {CustomError} from "./customError.js";

export class BadRequestError extends CustomError{
    statusCode = 400;
    code = "BAD_REQUEST";
    constructor(message = "Bad request", code = "BAD_REQUEST") {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

}