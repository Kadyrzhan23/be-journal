import {CustomError} from "./customError.js";

export class conflictError extends CustomError{
    statusCode = 409;
    code = "CONFLICT_ERROR";
    constructor(message = "Conflict",code = "CONFLICT_ERROR") {
        super(message);
        code = this.code;
        Object.setPrototypeOf(this, conflictError.prototype);
    }
}