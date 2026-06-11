import {CustomError} from "./customError.js";

export class NotFoundError extends CustomError {
    statusCode = 404;

    constructor(code: string, message?: string) {
        super(code, message);
    }
}